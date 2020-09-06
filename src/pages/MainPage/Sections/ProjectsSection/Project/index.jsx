import React from "react";
import styles from "./project.module.scss";
import { TweenMax } from "gsap";

const Project = (props) => {
  const [isMobileScreen, setIsMobileScreen] = React.useState(true);
  const previewID = `${props.id}-preview`;
  const previewEase = "back.out(1.1)";
  const previewDuration = 0.3;
  const maxRotate = 60;
  const mobileScreen = 660;

  const hadleMouseMove = (e) => {
    const mouseMoment = e.movementY - e.movementX;

    const previewEl = e.target.querySelector(`#${previewID}`);
    TweenMax.set(previewEl, { height: e.target.clientWidth });
    TweenMax.to(previewEl, 0.2, {
      x:
        e.clientX -
        e.target.getBoundingClientRect().left -
        previewEl.clientWidth / 2,
      y:
        e.clientY -
        e.target.getBoundingClientRect().top -
        previewEl.clientHeight / 2,
      rotate:
        mouseMoment < maxRotate && mouseMoment > -maxRotate
          ? mouseMoment / 3
          : 0,
    });
  };

  const handleMouseEnter = (e) => {
    e.target.style.zIndex = 999;
    const previewEl = e.target.querySelector(`#${previewID}`);

    TweenMax.to(previewEl, previewDuration, {
      ease: previewEase,
      opacity: 1,
      scale: 1.2,
    });
  };

  const handleMouseLeave = (e) => {
    e.target.style.zIndex = 1;
    const previewEl = e.target.querySelector(`#${previewID}`);

    TweenMax.to(previewEl, previewDuration, {
      ease: "back.out(4.4)",
      delay: 0.15,
      opacity: 0,
      scale: 0.4,
      rotate: 0,
    });
  };

  const handleResize = (e) => {
    let screenW = window.innerWidth;
    if (screenW < 660) {
      setIsMobileScreen(false);
    } else {
      setIsMobileScreen(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      {isMobileScreen && window.innerWidth > mobileScreen ? (
        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={hadleMouseMove}
          rel="noopener noreferrer"
          href={props.url}
          className={styles.link}
          data-preview
          target="_blank"
        >
          <div
            id={previewID}
            className={styles.preview}
            style={{ backgroundImage: `url(${props.preview})` }}
          ></div>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.text}>{props.text}</p>
        </a>
      ) : (
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
      )}
    </>
  );
};

export default Project;
