import * as React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  title?: string;
}

const Section: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

Section.defaultProps = {
  className: "",
  title: "Title",
} as Partial<Props>;

export default Section;
