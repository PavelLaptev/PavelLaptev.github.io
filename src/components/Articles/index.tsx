import * as React from "react";
import styles from "./styles.module.scss";
import Section from "../Section";
import Card from "../Card";
import articlesData from "./articlesData";

const Articles: React.FunctionComponent = () => {
  return (
    <Section title="Articles">
      {articlesData.map((item, i) => {
        return (
          <Card
            href={item.url}
            key={i}
            className={styles.article}
            new={item.new}
          >
            <h1 className={styles.label}>{item.title}</h1>
          </Card>
        );
      })}
    </Section>
  );
};

export default Articles;
