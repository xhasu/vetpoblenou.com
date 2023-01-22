import axios from "axios";
import { createArticleAdapter } from "adapters/article";

const Article = ({ post = {} }) => {
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
      <div className="max-w-2xl mx-auto">
        <picture>
          <img
            src={promo_item}
            alt=""
            className="aspect-h-video h-full w-full object-cover"
          />
        </picture>
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

export async function getStaticPaths() {
  const apiUrl = process.env.WORDPRESS_API_URL;

  // fetch posts from wordpress api using axios
  const url = `${apiUrl}/wp/v2/posts`;
  const res = await axios.get(url);
  const posts = await res.data;
  // const headers = res.headers;

  // get total pages in number
  // const totalPages = parseInt(headers["x-wp-totalpages"]);
  const totalPages = 3; // for testing only

  console.log("Total pages: ", totalPages);

  // create array length from total pages in nodejs
  const arr = Array.from(Array(totalPages - 1).keys());
  console.log("Arr length", arr.length);

  // fetch next pages
  const totalPost = await Promise.all(
    arr.map(async (_, i) => {
      const res = await axios.get(url, {
        params: {
          page: i + 2,
        },
      });
      const posts = await res.data;
      console.log("Page: ", i + 2, " - ", posts.length, " posts");
      return posts;
    })
  );

  // flatten array
  const allPosts = totalPost.reduce((acc, val) => acc.concat(val), posts);
  console.log("Total posts: ", allPosts.length);

  // get paths from posts
  const paths = allPosts.map((post) => {
    const { slug = "", date = "" } = post;
    const year = "" + new Date(date).getFullYear();
    const month = ("0" + (new Date(date).getMonth() + 1)).slice(-2);
    return {
      params: {
        slug: [year, month, slug],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

// get static props
export async function getStaticProps(context) {
  const apiUrl = process.env.WORDPRESS_API_URL;

  const { params } = context;
  const { slug = [] } = params;

  // set path using last item of slug
  const path = slug[slug.length - 1];

  // fetch posts from wordpress api using axios
  const res = await axios.get(`${apiUrl}/wp/v2/posts`, {
    params: {
      slug: path,
    },
  });
  const posts = await res.data;

  // get first post
  const post = posts[0];

  const post_categories = post.categories;

  // fetch categories from wordpress api using axios
  const res_categories = await axios.get(`${apiUrl}/wp/v2/categories`, {
    params: {
      include: post_categories,
    },
  });

  const categories = await res_categories.data;

  const category = categories.find((c) => c.id === post.categories[0]);
  post.subtype = category.name;

  const post_feature_media = post.featured_media;

  // fetch media from wordpress api using axios
  const res_media = await axios.get(`${apiUrl}/wp/v2/media`, {
    params: {
      include: post_feature_media,
    },
  });

  const media = await res_media.data;

  const feature_media = media.find((m) => m.id === post.featured_media) || {};
  post.promo_item = feature_media.source_url || "";

  return {
    props: {
      post: createArticleAdapter(post),
    },
  };
}
