import React from "react";
import styles from "./project.module.scss";

const Project = (props) => {
  return (
    <a
      rel="noopener noreferrer"
      href={props.url}
      className={styles.link}
      data-preview
      target="_blank"
    >
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.text}>{props.text}</p>
    </a>
  );
};

export default Project;
