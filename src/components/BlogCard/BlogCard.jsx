/* eslint-disable react/prop-types */
import styles from "./BlogCard.module.scss";

function BlogCard({ blog }) {
  console.log("In blog card");
  console.log(blog);
  let imageTagStr = blog.description.match(/<img\s+[^>]*src="([^"]*)"[^>]*>/i);

  console.log("Image tag ", imageTagStr[1]);
  let imageUrl = imageTagStr[1];
  return (
    <>
      <div className={styles.blog__container}>
        <a href={blog.guid} target="_blank" rel="noreferrer">
          <img className={styles.img} src={imageUrl} alt={blog.title} />
        </a>

        <h3 className={styles.blog__title}>{blog.title}</h3>
      </div>

      {/* <img src={imageUrl} alt={blog.title} /> */}
    </>
  );
}

export default BlogCard;
