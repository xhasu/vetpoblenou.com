import PromoCard from "components/promocard";
import PromoBanner from "components/shared/promo-banner";
import { createArticleAdapter } from "adapters/article";
import axios from "axios";

const BlogPage = ({ posts = [] }) => {
  return (
    <div>
      <PromoBanner type="BLOG" />
      <main className="container">
        {posts.map((post) => (
          <div key={post.id}>
            <PromoCard data={post} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default BlogPage;

// get server data from wordpress apu
export async function getStaticProps() {
  // get api url from env
  const apiUrl = process.env.WORDPRESS_API_URL;

  // fetch posts from wordpress api using axios
  const res = await axios.get(`${apiUrl}/wp/v2/posts`);
  const posts = await res.data;

  // get a list of the first category from posts.categories
  const all_categories = posts.reduce((acc, post) => {
    return [...acc, ...post.categories];
  }, []);

  // remove duplicates
  const unique_categories = [...new Set(all_categories)];

  // fetch categories from wordpress api using axios
  const res_categories = await axios.get(`${apiUrl}/wp/v2/categories`, {
    params: {
      include: unique_categories,
    },
  });

  const categories = await res_categories.data;

  // merge posts and categories
  posts.map((post) => {
    const category = categories.find((c) => c.id === post.categories[0]);
    post.subtype = category.name;
  });

  // get a list of featured media ids
  const featured_media_ids = posts.reduce((acc, post) => {
    return [...acc, post.featured_media];
  }, []);

  // fetch media from wordpress api using axios
  const res_media = await axios.get(`${apiUrl}/wp/v2/media`, {
    params: {
      include: featured_media_ids,
    },
  });

  const media = await res_media.data;

  // merge posts and media
  posts.map((post) => {
    const feature_media = media.find((m) => m.id === post.featured_media) || {};
    post.promo_item = feature_media.source_url || "";
  });

  return {
    props: {
      posts: posts.map(createArticleAdapter),
    },
  };
}
