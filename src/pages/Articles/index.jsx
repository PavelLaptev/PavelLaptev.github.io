import React from "react";
import { Link } from "react-router-dom";
import styles from "./articles.module.scss";

const Articles = () => {
  return (
      <div className={styles.wrap}>
        <nav>
          <Link className={styles.link} to="/">
            Main Page
          </Link>
          <Link className={styles.link} to="/articles">
            Articles
          </Link>
        </nav>
        <h1>This is articles</h1>
      </div>
  );
};

export default Articles;
