import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./promocomponent.module.scss";

import { ReactComponent as Shape } from "../../../../../assets/promo-shape.svg";

const PromoComponent = (props) => {
  return (
    <section className={styles.wrap}>
      <a rel="noopener noreferrer" className={styles.promolink} href={props.link} target="_blank" data-parallax>
        <div className={styles.content}>
          <h1 className={styles.title}>FRESH!</h1>
          <p className={styles.text}>{props.text}</p>
        </div>
        <div className={styles.shapewrap}>
          <Shape className={styles.shape} />
        </div>
      </a>
    </section>
  );
};

export default PromoComponent;
