import React from "react";
import styles from "./app.module.scss";
import Header from "./components/Header";
import FigmaPlugins from "./components/FigmaPlugins";
import Articles from "./components/Articles";
import Projects from "./components/Projects";
import ThemeSwitcher from "./components/ThemeSwitcher/";

const App = () => {
  const [toggleTheme, setToggleTheme] = React.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
  );

  React.useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setToggleTheme(e.matches ? true : false);
      });
  }, []);

  return (
    <div
      className={`${toggleTheme ? styles.darkTheme : styles.lightTheme} ${
        styles.root
      }`}
    >
      <main className={styles.wrap}>
        <ThemeSwitcher
          className={styles.themeSwitcher}
          onChange={() => setToggleTheme(!toggleTheme)}
        />
        <Header />
        <FigmaPlugins />
        <Projects />
        <Articles />
      </main>
    </div>
  );
};

export default App;
