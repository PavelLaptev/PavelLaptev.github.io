import React from "react";

import styles from "./mainpage.module.scss";
import { Cursor } from "../../components/";
import { IntroSection, ProjectsSection, ArticlesSection } from "./Sections";

import AnchorLink from "react-anchor-link-smooth-scroll";

///////////////////////////////////////////////////////////
////////////////////// ** MENU ** /////////////////////////
///////////////////////////////////////////////////////////

const Menu = (props) => {
  const [currentItem, setCurrentItem] = React.useState(0);

  React.useEffect(() => {
    let screenCenter = window.innerHeight / 2;

    window.addEventListener("resize", (e) => {
      screenCenter = window.innerHeight / 2;
    });

    window.addEventListener("scroll", (e) => {
      const scrollPos =
        window.scrollY ||
        window.scrollTop ||
        document.getElementsByTagName("html")[0].scrollTop;

      props.refs.forEach((item) => {
        const el = item.current;
        const correctedElPos = el.offsetTop - scrollPos;

        if (
          screenCenter > correctedElPos &&
          correctedElPos > 0 &&
          scrollPos >= 60
        ) {
          setCurrentItem(Number(el.getAttribute("data-order")));
        } else if (scrollPos <= 100) {
          setCurrentItem(0);
        }
      });
    });
  });

  const items = props.items.map((item, i) => {
    const handleClick = (e) => {
      const timer = setTimeout(() => {
        setCurrentItem(i);
      }, 500);
      return () => clearTimeout(timer);
    };

    return (
      <AnchorLink
        data-parallax
        rel="noopener noreferrer"
        href={`#${item.toLowerCase()}-section`}
        key={i}
        onClick={handleClick}
        className={`${styles.menuitem} ${
          i === currentItem ? styles.menuitem_active : null
        }`}
      >
        <h3 className={styles.menutext}>{item}</h3>
        <div className={styles.menuline}></div>
      </AnchorLink>
    );
  });

  return <section className={styles.menu}>{items}</section>;
};

///////////////////////////////////////////////////////////
/////////////////// ** MAIN PAGE ** ///////////////////////
///////////////////////////////////////////////////////////

const MainPage = () => {
  const IntroRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const articlesRef = React.useRef(null);

  return (
    <Cursor>
      <Menu
        items={["Hello", "Projects", "Articles"]}
        refs={[articlesRef, projectsRef, articlesRef]}
      />
      <div className={styles.wrap}>
        <IntroSection
          text="How to make iPad pointer on the Web"
          ref={IntroRef}
          order={0}
        />
        <ProjectsSection order={1} ref={projectsRef} />
        <ArticlesSection order={2} ref={articlesRef} />
      </div>
    </Cursor>
  );
};

export default MainPage;
