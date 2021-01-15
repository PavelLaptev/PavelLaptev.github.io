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

const addDigits = (dateString: any) => {
  dateString = dateString.split(".");
  var sum = 0;
  for (var i = 0; i < dateString.length; i++) {
    sum += parseInt(dateString[i], 10);
  }
  return sum;
};

const Card: React.FunctionComponent<Props> = (props) => {
  const isOutDated = () => {
    let now = new Date();
    let currentDate = now.getDate() + (now.getMonth() + 1) + now.getFullYear();
    let checkDate = addDigits(props.date);
    let daysPassed = currentDate - checkDate;

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
