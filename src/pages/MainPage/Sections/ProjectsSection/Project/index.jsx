import React from "react";
import styles from "./project.module.scss";

const Project = (props) => {
  return (
    <div className={styles.item}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={props.url}
        className={styles.title}
      >
        {props.title}
      </a>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default Project;
