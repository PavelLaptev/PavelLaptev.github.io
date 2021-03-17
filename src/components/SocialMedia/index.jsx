import React from "react";
import styles from "./styles.module.scss";
import Card from "./../Card";

const socialMediaData = {
  gh: {
    text: "GitHub",
    link: "https://github.com/PavelLaptev",
    svg:
      "M20 0C8.95 0 0 9.176 0 20.506 0 29.58 5.725 37.244 13.675 39.96c1 .18 1.375-.436 1.375-.974 0-.487-.025-2.102-.025-3.82C10 36.117 8.7 33.913 8.3 32.759c-.225-.59-1.2-2.41-2.05-2.896-.7-.385-1.7-1.333-.025-1.359 1.575-.026 2.7 1.487 3.075 2.102 1.8 3.101 4.675 2.23 5.825 1.692.175-1.333.7-2.23 1.275-2.743-4.45-.513-9.1-2.281-9.1-10.125 0-2.23.775-4.075 2.05-5.51-.2-.513-.9-2.615.2-5.435 0 0 1.675-.538 5.5 2.102 1.6-.461 3.3-.692 5-.692 1.7 0 3.4.23 5 .692 3.825-2.666 5.5-2.102 5.5-2.102 1.1 2.82.4 4.922.2 5.434 1.275 1.436 2.05 3.256 2.05 5.511 0 7.87-4.675 9.612-9.125 10.125.725.64 1.35 1.871 1.35 3.794 0 2.742-.025 4.947-.025 5.639 0 .538.375 1.179 1.375.974C34.275 37.244 40 29.554 40 20.506 40 9.176 31.05 0 20 0z",
  },
  fb: {
    text: "FaceBook",
    link: "https://www.facebook.com/pavel.laptev.94",
    svg:
      "M2.343 2.343C0 4.686 0 8.458 0 16v8c0 7.543 0 11.314 2.343 13.657S8.458 40 16 40h2.022V25.24H13v-6.192h5.022v-5.2C18.022 10.066 21.034 7 24.75 7H30v5.568h-3.757c-1.18 0-2.138.974-2.138 2.176v4.304h5.8l-.801 6.192h-4.999V40c7.473 0 11.22-.01 13.552-2.343C40 35.314 40 31.543 40 24v-8c0-7.542 0-11.314-2.343-13.657S31.543 0 24 0h-8C8.458 0 4.686 0 2.343 2.343z",
  },
  in: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/pavel-laptev/",
    svg:
      "M0 16C0 8.458 0 4.686 2.343 2.343S8.458 0 16 0h8c7.543 0 11.314 0 13.657 2.343S40 8.458 40 16v8c0 7.543 0 11.314-2.343 13.657S31.543 40 24 40h-8c-7.542 0-11.314 0-13.657-2.343S0 31.543 0 24v-8zm13.65 15V14.806H8.314V31h5.334zm-2.668-18.405c1.86 0 3.018-1.243 3.018-2.797C13.965 8.209 12.842 7 11.018 7 9.193 7 8 8.209 8 9.798c0 1.554 1.157 2.797 2.947 2.797h.035zM22.242 31H17s.069-15.052 0-16.61h5.242v2.351l-.035.058h.035v-.058C22.938 15.61 24.185 14 26.965 14 30.415 14 33 16.374 33 21.476V31h-5.241v-8.886c0-2.233-.759-3.756-2.656-3.756-1.448 0-2.31 1.027-2.689 2.019-.138.355-.172.85-.172 1.347V31z",
  },
  tw: {
    text: "Twitter",
    link: "https://twitter.com/PaveILaptev",
    svg:
      "M40 7.79063C38.526 8.43122 36.9447 8.86612 35.2857 9.06006C36.9805 8.06097 38.2814 6.4742 38.89 4.5877C37.3027 5.51625 35.5483 6.18623 33.6804 6.5506C32.1826 4.98145 30.0522 4 27.6891 4C23.1598 4 19.4838 7.6202 19.4838 12.0808C19.4838 12.7155 19.5554 13.3326 19.6986 13.9203C12.8778 13.5853 6.83276 10.3647 2.78681 5.47511C2.08265 6.66814 1.67686 8.0551 1.67686 9.53609C1.67686 12.3394 3.12696 14.8136 5.32896 16.2593C3.98627 16.2182 2.72117 15.8538 1.61122 15.2485C1.61122 15.2837 1.61122 15.3131 1.61122 15.3484C1.61122 19.2624 4.4398 22.53 8.19335 23.2705C7.50709 23.4527 6.77905 23.5526 6.03312 23.5526C5.50201 23.5526 4.98881 23.4997 4.48754 23.4057C5.53185 26.6145 8.56333 28.9535 12.1498 29.0182C9.3391 31.1868 5.80636 32.4797 1.95733 32.4797C1.29494 32.4797 0.644488 32.4386 0 32.368C3.62823 34.6601 7.94271 36 12.5794 36C27.6712 36 35.9242 23.6878 35.9242 13.0094C35.9242 12.6567 35.9182 12.31 35.9003 11.9633C37.5056 10.8231 38.896 9.40092 39.994 7.77888L40 7.79063Z",
  },
  at: {
    text: "Mail Me",
    link: "mailto:laptev.graphics@gmail.com",
    svg:
      "M20.196 0C26.96 0 33.81 2.994 37.429 9.205c2.725 4.68 3.423 11.19 1.419 16.326-1.273 3.336-3.963 5.601-7.47 5.601-2.532 0-4.799-1.212-5.716-3.777-1.502 2.518-3.88 3.777-7.135 3.777-5.72 0-9.64-5.196-9.64-10.985 0-5.708 3.85-10.942 9.64-10.942 2.754 0 4.896.955 6.426 2.866V9.509h5.674v14.068c0 3.08 3.069 3.688 4.257.955 1.786-3.902.959-9.687-1.127-13.243-2.797-4.934-8.263-7.164-13.561-7.164-8.508 0-15.523 6.45-15.523 15.674 0 12.902 13.08 19.294 23.576 13.895l1.335 3.995C16.646 44.569 0 35.347 0 19.799 0 7.905 9.398 0 20.196 0zm-.376 26.139c3.291 0 5.216-2.72 5.216-5.992 0-3.248-1.972-5.905-5.216-5.905-3.233 0-5.174 2.68-5.174 5.905 0 3.25 1.894 5.992 5.174 5.992z",
  },
};

const SocialMedia = () => {
  return (
    <div className={styles.wrap}>
      {Object.keys(socialMediaData).map((item, i) => {
        const mediaName = Object.keys(socialMediaData)[i];
        return (
          <Card
            key={mediaName}
            href={socialMediaData[mediaName].link}
            className={`${styles.link} ${
              styles[`${Object.keys(socialMediaData)[i]}`]
            }`}
          >
            <svg
              className={`${styles.icon}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={socialMediaData[mediaName].svg}
              />
            </svg>
          </Card>
        );
      })}
    </div>
  );
};

export default SocialMedia;
