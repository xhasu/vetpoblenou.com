import { createArticleAdapter } from "adapters/article";
import axios from "axios";
import PromoCard from "components/promocard";
import PromoBanner from "components/shared/promo-banner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BlogPage = ({ api = "https://www.vetpoblenou.com/blog/wp-json" }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPosts = async () => {
      // fetch posts from wordpress api using axios page 1
      const res = await axios.get(`${api}/wp/v2/posts`, {
        params: {
          page: page,
          categories: id,
        },
      });
      const data = await res.data;
      const headers = res.headers;
      const total_pages = headers["x-wp-totalpages"];
      setHasMore(page < total_pages);

      // get a list of the first category from posts.categories
      const all_categories = data.reduce((acc, post) => {
        return [...acc, ...post.categories];
      }, []);

      // remove duplicates
      const unique_categories = [...new Set(all_categories)];

      // fetch categories from wordpress api using axios
      const res_categories = await axios.get(`${api}/wp/v2/categories`, {
        params: {
          include: unique_categories,
        },
      });

      const categories = await res_categories.data;

      // merge posts and categories
      data.map((post) => {
        const category = categories.find((c) => c.id === post.categories[0]);
        post.subtype = category.name;
      });

      // get a list of featured media ids
      const featured_media_ids = data.reduce((acc, post) => {
        return [...acc, post.featured_media];
      }, []);

      // fetch media from wordpress api using axios
      const res_media = await axios.get(`${api}/wp/v2/media`, {
        params: {
          include: featured_media_ids,
        },
      });

      const media = await res_media.data;

      // merge posts and media
      data.map((post) => {
        const feature_media =
          media.find((m) => m.id === post.featured_media) || {};
        post.promo_item = feature_media.source_url || "";
      });

      const newPosts = data.map(createArticleAdapter);

      setPosts([...posts, ...newPosts]);
      setLoading(false);
    };
    setLoading(true);
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <PromoBanner type="BLOG" />
      <main className="container max-w-7xl">
        {posts.map((post) => (
          <div key={post.id}>
            <PromoCard data={post} />
          </div>
        ))}
        {loading && page == 1 && (
          <div className="text-center">
            <button className="px-8 py-2 text-2xl border border-black cursor-pointer">
              <span>Cargando...</span>
            </button>
          </div>
        )}
        <div className="text-center mb-16">
          {hasMore && (
            <button
              onClick={nextPage}
              className="px-8 py-2 text-2xl border border-black cursor-pointer"
            >
              {loading && <span>Cargando...</span>}
              {!loading && <span>Cargar más</span>}
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  return {
    props: {
      api: process.env.WORDPRESS_API_URL,
    },
  };
};

export const getStaticPaths = async () => {
  const categories = [10, 5, 37, 11, 16, 26, 15, 7];

  // generate all paths from ids of categories
  const paths = categories.map((category) => ({
    params: { id: category.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
