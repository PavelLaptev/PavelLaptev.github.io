import React from "react";

import styles from "./mainpage.module.scss";
import { IntroSection, ProjectsSection, ArticlesSection } from "./Sections";

///////////////////////////////////////////////////////////
////////////////////// ** MENU ** /////////////////////////
///////////////////////////////////////////////////////////

const MainPage = () => {
  const IntroRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const articlesRef = React.useRef(null);

  return (
    <div className={styles.wrap}>
      <IntroSection
        text="How to make iPad pointer on the Web"
        ref={IntroRef}
        order={0}
      />
      <ProjectsSection order={1} ref={projectsRef} />
      <ArticlesSection order={2} ref={articlesRef} />
    </div>
  );
};

export default MainPage;
