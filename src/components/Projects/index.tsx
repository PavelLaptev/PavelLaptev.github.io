import * as React from "react";
import styles from "./styles.module.scss";
import Section from "../Section";
import Card from "../Card";
import projectsData from "./projectsData";

const Projects: React.FunctionComponent = () => {
  return (
    <Section title="Pets">
      {projectsData.map((item, i) => {
        return (
          <Card
            href={item.url}
            key={i}
            className={styles.article}
            badge
            date={item.date}
          >
            <h1 className={styles.label}>{item.title}</h1>
            <p className={styles.text}>{item.text}</p>
          </Card>
        );
      })}
    </Section>
  );
};

export default Projects;
