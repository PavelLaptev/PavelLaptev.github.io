import React from "react";
import styles from "./wrapper.module.scss";

const Wrapper = React.forwardRef((props, ref) => {
  return (
    <div
      data-order={props.order}
      ref={ref}
      id={props.id}
      className={`${styles.wrap} ${props.wrapClass}`}
    >
      <div className={`${styles.container} ${props.containerClass}`}>
        {props.children}
      </div>
    </div>
  );
});

Wrapper.defaultProps = {
  id: null,
  wrapClass: null,
  containerClass: null,
  ref: null,
  order: null,
};

export default Wrapper;
