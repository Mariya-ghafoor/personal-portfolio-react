export const getBlogs = async () => {
  const response = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mariya.aghafoor"
  );
  const data = await response.json();
  console.log("got data");

  console.log(data);
  return data;
};
