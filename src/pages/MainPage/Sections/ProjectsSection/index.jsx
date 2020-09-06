import React from "react";
import { Wrapper } from "../../../../components";
import styles from "./projects.module.scss";
import Project from "./Project";
import { projectsList } from "../../../../common/content";

const IntroSection = React.forwardRef((props, ref) => {
  return (
    <Wrapper
      order={props.order}
      ref={ref}
      id={props.id}
      wrapClass={styles.wrap}
      containerClass={styles.container}
    >
      {projectsList.map((item, i) => {
        return (
          <Project
            key={`project-${i}`}
            id={`project-${i}`}
            title={item.title}
            text={item.text}
            preview={item.preview}
            url={item.url}
          />
        );
      })}
    </Wrapper>
  );
});

IntroSection.defaultProps = {
  id: "projects-section",
};

export default IntroSection;
