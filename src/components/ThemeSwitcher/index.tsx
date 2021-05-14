import * as React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  onChange: () => void;
}

const ThemeSwitcher: React.FunctionComponent<Props> = (props) => {
  const [toggle, setToggle] = React.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
  );

  React.useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setToggle(e.matches ? true : false);
      });
  }, []);

  const hadleCheckbox = () => {
    setToggle(!toggle);
    props.onChange();
  };

  return (
    <div
      className={`${styles.wrap} ${props.className} ${
        toggle ? styles.active : ""
      }`}
    >
      <div className={styles.toggler}>
        <input type="checkbox" onChange={hadleCheckbox} checked={toggle} />
      </div>
    </div>
  );
};

ThemeSwitcher.defaultProps = {
  className: "",
} as Partial<Props>;

export default ThemeSwitcher;
