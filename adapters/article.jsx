// get article api data from wordpress
export const createArticleAdapter = (article) => ({
  id: article.id,
  title: article.title.rendered,
  content: article.content.rendered,
  excerpt: article.excerpt.rendered,
  promo_item: article.promo_item,
  publish_date: article.date,
  canonical_url: article.link,
  subtype: article.subtype,
  categories: article.categories,
  author: article.author,
  tags: article.tags,
});
