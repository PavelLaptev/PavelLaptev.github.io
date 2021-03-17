import * as React from "react";
import styles from "./styles.module.scss";
import Badge from "./../Badge/";

interface Props {
  className?: string;
  href: string;
  hover?: boolean;
  new?: boolean;
}

const Card: React.FunctionComponent<Props> = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={`${styles.card} ${props.hover ? styles.card_hover : ""} ${
        props.className
      }`}
    >
      {props.new ? <Badge /> : null}
      {props.children}
    </a>
  );
};

Card.defaultProps = {
  className: "",
  hover: true,
  new: false,
} as Partial<Props>;

export default Card;
