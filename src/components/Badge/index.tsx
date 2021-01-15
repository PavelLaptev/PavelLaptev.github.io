import * as React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  text?: string;
}

const Badge: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={`${styles.badge} ${props.className}`}>{props.text}</div>
  );
};

Badge.defaultProps = {
  className: "",
  text: "NEW!",
} as Partial<Props>;

export default Badge;
