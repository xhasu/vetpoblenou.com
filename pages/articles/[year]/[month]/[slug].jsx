import { createArticleAdapter } from "adapters/article";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Article = ({ api = "https://www.vetpoblenou.com/blog/wp-json" }) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  const route = useRouter();
  const { slug = [] } = route.query;

  useEffect(() => {
    const fetchPost = async () => {
      // fetch posts from wordpress api using axios
      const res = await axios.get(`${api}/wp/v2/posts`, {
        params: {
          slug: slug,
        },
      });

      const data = await res.data;
      // log data
      console.log("data", data);
      const post = data[0] || {};

      const post_categories = post.categories;

      // fetch categories from wordpress api using axios
      const res_categories = await axios.get(`${api}/wp/v2/categories`, {
        params: {
          include: post_categories,
        },
      });

      const categories = await res_categories.data;

      const category = categories.find((c) => c.id === post.categories[0]);
      post.subtype = category.name;

      const post_feature_media = post.featured_media;

      // fetch media from wordpress api using axios
      const res_media = await axios.get(`${api}/wp/v2/media`, {
        params: {
          include: post_feature_media,
        },
      });

      const media = await res_media.data;

      const feature_media =
        media.find((m) => m.id === post.featured_media) || {};
      post.promo_item = feature_media.source_url || "";

      const newPost = createArticleAdapter(post);
      setPost(newPost);

      setLoading(false);
    };
    setLoading(true);
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const {
    title = "",
    excerpt = "",
    content = "",
    publish_date = "",
    subtype = "",
    promo_item = "",
  } = post;

  const publish_date_formatted = new Date(publish_date).toLocaleString(
    "en-US",
    {
      month: "long",
      day: "2-digit",
      year: "numeric",
    }
  );

  return (
    <div>
      <div className="relative mx-auto h-32 bg-primary"></div>
      <div className="container">
        {loading && <div className="text-center py-4 text-lg">. . .</div>}
      </div>
      <div className="max-w-2xl mx-auto">
        {promo_item && (
          <picture>
            <img
              src={promo_item}
              alt=""
              className="aspect-h-video h-full w-full object-cover"
            />
          </picture>
        )}
      </div>
      <main className="container prose prose-lg">
        <div>
          <h3 className="text-primary text-sm">{subtype}</h3>
        </div>
        <h1>{title}</h1>
        <div className="lead" dangerouslySetInnerHTML={{ __html: excerpt }} />
        {publish_date && (
          <div className="text-sm text-gray-500 text-right">
            <time dateTime={publish_date}>{publish_date_formatted}</time>
          </div>
        )}
        <div className="border border-gray-300 my-4" />
        <div className="break-words">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </main>
    </div>
  );
};

export default Article;
