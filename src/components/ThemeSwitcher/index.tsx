import * as React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  checked: boolean;
  onChange: () => void;
}

const ThemeSwitcher: React.FunctionComponent<Props> = (props) => {
  const [toggle, setToggle] = React.useState(false);

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
        <input
          type="checkbox"
          onChange={hadleCheckbox}
          checked={props.checked}
        />
      </div>
    </div>
  );
};

ThemeSwitcher.defaultProps = {
  className: "",
} as Partial<Props>;

export default ThemeSwitcher;
