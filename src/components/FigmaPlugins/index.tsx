import * as React from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import Icon from "./../Icon";
import Section from "./../Section";
import Card from "./../Card";

const FigmaPlugins: React.FunctionComponent = () => {
  const [plugins, setPlugins] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.allorigins.win/raw?url=https://www.figma.com/api/plugins/profile/134689`
      )
      .then((res) => {
        let pluginsArray = res.data.meta;
        // console.log(pluginsArray);
        setPlugins(pluginsArray);
      });
  }, []);

  return (
    <Section title="Figma plugins">
      {plugins.length > 0
        ? plugins.map((item: any, i) => {
            let lastVersionData = item.versions[Object.keys(item.versions)[0]];
            let pluginData = {
              link: `https://www.figma.com/community/plugin/${item.id}`,
              name: lastVersionData.name,
              img: `https://www.figma.com${lastVersionData.redirect_icon_url}`,
              likes: item.like_count,
              downloads: item.install_count,
              views: item.view_count,
            };

            // console.log(item);

            return (
              <Card
                key={i}
                href={pluginData.link}
                className={styles.plugin}
                badge
              >
                <img
                  className={styles.icon}
                  src={pluginData.img}
                  alt="plugin icon"
                />

                <h2 className={styles.label}>{pluginData.name}</h2>
                <div className={styles.stat}>
                  <div className={styles.stat_item}>
                    <Icon name="downloads" />
                    <span>{pluginData.downloads.toLocaleString()}</span>
                  </div>
                  <div className={styles.stat_item}>
                    <Icon name="likes" />
                    <span>{pluginData.likes.toLocaleString()}</span>
                  </div>
                  <div className={styles.stat_item}>
                    <Icon name="views" />
                    <span>{pluginData.views.toLocaleString()}</span>
                  </div>
                </div>
              </Card>
            );
          })
        : null}
    </Section>
  );
};

export default FigmaPlugins;
