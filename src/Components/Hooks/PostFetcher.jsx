export default function PostFetcher(data, category) {
  // always show the latest 3 posts
  // sort id in decreasing order
  // slice the first 3 posts
  const categoryContent = data.categories[category];
  const projects = categoryContent.projects;
  const sortedPosts = projects.sort((a, b) => b.id - a.id).slice(0, 3);
  return sortedPosts;
}
