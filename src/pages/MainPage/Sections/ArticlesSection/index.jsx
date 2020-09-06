import React from "react";
import { Wrapper } from "../../../../components";
import { articlesList } from "../../../../common/content";
import styles from "./articles.module.scss";

const ArticlesSection = React.forwardRef((props, ref) => {
  return (
    <Wrapper
      order={props.order}
      ref={ref}
      id={props.id}
      // wrapClass={styles.wrap}
      containerClass={styles.container}
    >
      <div className={styles.articles}>
        {articlesList.map((item, i) => {
          return (
            <a
              key={`project-${i}`}
              rel="noopener noreferrer"
              className={styles.link}
              href={item.url}
              target="_blank"
            >
              {item.title}
            </a>
          );
        })}
      </div>
      <div className={styles.back}>
        <h2 className={styles.backtitle}>Newest</h2>
        <svg className={styles.backline}>
          <line x1="100%" y1="100%" x2="0" y2="0" />
        </svg>

        <h2 className={styles.backtitle}>Oldest</h2>
      </div>
    </Wrapper>
  );
});

ArticlesSection.defaultProps = {
  id: "articles-section",
};

export default ArticlesSection;
