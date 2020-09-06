import React from "react";
import styles from "./cursor.module.scss";
import { TweenMax } from "gsap";
import { getMoveIndex } from "../../common/utils";

const Cursor = (props) => {
  const [isMobileScreen, setIsMobileScreen] = React.useState(true);
  const outerCusrsorRef = React.createRef();
  const innerCusrsorRef = React.createRef();
  const parallaxOffset = 6;
  const speed = 0.16;
  const shiftOuterCursor = 40;
  const shiftInnerCursor = 12;
  const mobileScreen = 660;

  const handleResize = () => {
    let screenW = window.innerWidth;
    if (screenW < mobileScreen) {
      setIsMobileScreen(false);
    } else {
      setIsMobileScreen(true);
    }
  };

  const updatePositions = (
    outerCursor,
    innercursor,
    currentElement,
    isHover,
    e
  ) => {
    // If not hovered
    if (!isHover) {
      TweenMax.to(outerCursor, speed, {
        x: e.clientX - shiftOuterCursor,
        y: e.clientY - shiftOuterCursor,
        scale: 1,
        rotate: 45 * 2,
      });

      TweenMax.to(innercursor, speed * 1.5, {
        x: e.clientX - shiftInnerCursor,
        y: e.clientY - shiftInnerCursor,
        scale: 1,
        rotate: 45,
        strokeWidth: 4,
      });
    }

    // If hovered
    if (currentElement && isHover) {
      if (currentElement.hasAttribute("data-preview")) {
        TweenMax.to(outerCursor, speed, {
          x: e.clientX - shiftOuterCursor,
          y: e.clientY - shiftOuterCursor,
          scale: 0,
        });
      } else {
        TweenMax.to(outerCursor, speed, {
          x: e.clientX - shiftOuterCursor,
          y: e.clientY - shiftOuterCursor,
          scale: 2.6,
          rotate: 0,
        });
      }

      TweenMax.to(innercursor, speed * 1.5, {
        x: e.clientX - shiftInnerCursor,
        y: e.clientY - shiftInnerCursor,
        scale: 1.2,
        strokeWidth: 3,
      });

      TweenMax.to(currentElement, speed, {
        x: getMoveIndex(
          e.clientX,
          currentElement.getBoundingClientRect().left,
          currentElement.clientWidth,
          parallaxOffset
        ),
        y: getMoveIndex(
          e.clientY,
          currentElement.getBoundingClientRect().top,
          currentElement.clientHeight,
          parallaxOffset
        ),
        rotate: (e.movementY - e.movementX) / 10,
      });
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (isMobileScreen && window.innerWidth > mobileScreen) {
      const interactElements = document.getElementsByTagName("a");
      let isHover = false;
      let currentElement = null;

      document.addEventListener("mousemove", function cursorMouseListener(e) {
        updatePositions(
          outerCusrsorRef.current,
          innerCusrsorRef.current,
          currentElement,
          isHover,
          e
        );
        if (!outerCusrsorRef.current) {
          document.removeEventListener("mousemove", cursorMouseListener);
        }
      });

      [...interactElements].forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
          currentElement = e.target;
          isHover = true;
        });
      });

      [...interactElements].forEach((item) => {
        item.addEventListener("mouseleave", (e) => {
          isHover = false;
          TweenMax.to(item, speed, {
            x: 0,
            y: 0,
            rotate: 0,
          });
        });
      });
    }

    return () => {
      console.log("**CURSOR UNMOUNTED**");
      console.clear();
    };
  });

  return (
    <>
      {isMobileScreen ? (
        <>
          <svg
            viewBox="0 0 100 100"
            className={styles.outercursor}
            ref={outerCusrsorRef}
          >
            <path d="M16.1754 16.1754L50 2.16478L83.8246 16.1754L97.8352 50L83.8246 83.8246L50 97.8352L16.1754 83.8246L2.16478 50L16.1754 16.1754Z" />
          </svg>
          <svg
            viewBox="0 0 22 22"
            className={styles.innercursor}
            ref={innerCusrsorRef}
          >
            <path d="M11 0V22M22 11L0 11" />
          </svg>
        </>
      ) : null}
      {props.children}
    </>
  );
};

export default Cursor;
