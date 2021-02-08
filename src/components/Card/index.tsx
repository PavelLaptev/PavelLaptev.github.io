import * as React from "react";
import styles from "./styles.module.scss";
import Badge from "./../Badge/";

interface Props {
  className?: string;
  href: string;
  hover?: boolean;
  badge?: boolean;
  date?: string;
}

const parseDate = (str: any) => {
  var mdy = str.split(".");
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
};

const datediff = (first: any, second: any) => {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
};

const Card: React.FunctionComponent<Props> = (props) => {
  const isOutDated = () => {
    let now = new Date();
    let currentDate = `${now.getDate()}.${now.getMonth()}.${now.getFullYear()}`;
    let daysPassed = datediff(parseDate(currentDate), parseDate(props.date));

    // console.log(daysPassed);

    if (props.date === "0.0.0" || daysPassed > 10) {
      return true;
    } else {
      // console.log(daysPassed);
      return false;
    }
  };

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={`${styles.card} ${props.hover ? styles.card_hover : ""} ${
        props.className
      }`}
    >
      {props.badge && !isOutDated() ? <Badge /> : null}
      {props.children}
    </a>
  );
};

Card.defaultProps = {
  className: "",
  hover: true,
  badge: false,
  date: "00.00.00",
} as Partial<Props>;

export default Card;
