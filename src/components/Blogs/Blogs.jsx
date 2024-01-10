import { getBlogs } from "../../services/getBlogs";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import styles from "./Blogs.module.scss";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs().then((data) => {
      //console.log("received " + data.items);
      setBlogs(data.items);
    });
    console.log("Got blogs", blogs);
  }, []);
  return (
    <>
      {blogs && (
        <div className={styles.blogs__container}>
          {blogs.map((item, index) => (
            <BlogCard key={index} blog={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default Blogs;
