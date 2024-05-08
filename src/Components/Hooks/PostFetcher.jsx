export default function PostFetcher(data, category) {
  // always show the latest 3 posts
  // sort id in decreasing order
  // slice the first 3 posts
  const latestPosts = data.categories[category];
  const sortedPosts = latestPosts.sort((a, b) => b.id - a.id).slice(0, 3);

  return sortedPosts;
}
