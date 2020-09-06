import React from "react";
import { Wrapper } from "../../../../components";
import styles from "./intro.module.scss";
import PromoComponent from "./PromoComponent";
import SocialMedia from "./SocialMedia";

const IntroSection = React.forwardRef((props, ref) => {
  return (
    <>
      <Wrapper
        order={props.order}
        ref={ref}
        id={props.id}
        wrapClass={styles.wrap}
        containerClass={styles.container}
      >
        <SocialMedia />

        <section className={styles.content}>
          <section className={styles.about}>
            <p className={styles.abouttext}>
              Hi! My name is Pavel Laptev. I'm a digital designer. Love design,
              frontend, art and architecture. Make things work, write articles,
              believe in opensource.
            </p>
          </section>
          <section className={styles.promo}>
            <PromoComponent link={props.link} text={props.text} />
          </section>
        </section>
      </Wrapper>
    </>
  );
});

IntroSection.defaultProps = {
  id: "hello-section",
  link: "https://pavellaptev.github.io/context-cursor/",
  text: "Awesome text",
};

export default IntroSection;
