const articlesData = [
  {
    title: "Squircles on the Web — Houdini to the rescue 🚑 🚀",
    url:
      "https://pavellaptev.medium.com/squircles-on-the-web-houdini-to-the-rescue-5ef11f646b72",
    date: "15.4.2021",
    new: true,
  },
  {
    title:
      "How to create a Pan`n`Pinch component for a Figma plugin. Step-by-step Recipe.",
    url:
      "https://pavellaptev.medium.com/how-to-create-a-pan-n-pinch-component-for-a-figma-plugin-step-by-step-recipe-afea4d296e0",
    date: "8.2.2021",
    new: false,
  },
  {
    title: "Kinetic Typography with ThreeJS",
    url:
      "https://blog.prototypr.io/kinetictypography-with-threejs-2bed948720a2",
    date: "14.2.2021",
    new: false,
  },
  {
    title: "Make text pattern background with <canvas>",
    url:
      "https://medium.com/@PavelLaptev/make-text-pattern-background-with-canvas-d1d89268c35",
    date: "14.1.2021",
    new: false,
  },
  {
    title: "iPad pointer on the web",
    url: "https://blog.prototypr.io/ipad-pointer-on-the-web-f3aaf48d515c",
    date: "0.0.0",
    new: false,
  },
  {
    title: "The Design System That Alteos Built",
    url:
      "https://medium.com/alteos-tech-blog/the-design-system-that-alteos-built-7dbbaf8a009e",
    date: "0.0.0",
    new: false,
  },
  {
    title: "JSON to Figma plugin. from Vanilla JS to React",
    url:
      "https://medium.com/@PavelLaptev/json-to-figma-plugin-from-vanilla-js-to-react-6229a64b3a3e",
    date: "0.0.0",
    new: false,
  },
  {
    title: "JSON to Figma Plugin. How to create a vanilla Figma Plugin",
    url:
      "https://medium.com/@PavelLaptev/json-to-figma-how-to-create-a-vanilla-figma-plugin-8aec40561886",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Changing children's state from another component with React Hooks",
    url:
      "https://itnext.io/changing-children-state-from-another-component-with-react-hooks-5c982c042e8",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Theming With CSS Variables",
    url: "https://blog.prototypr.io/css-variables-90cc4cdf41e9",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Flex-box Grid System with SCSS. Old but gold",
    url:
      "https://medium.com/@PavelLaptev/flex-box-grid-system-with-sass-old-but-gold-d7d6ee31ef11",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Create an app from scratch using FramerX",
    url:
      "https://medium.com/@PavelLaptev/create-an-app-from-the-stretch-using-framerx-9d15d06c8bdf",
    date: "0.0.0",
    new: false,
  },
  {
    title:
      "The Simpliest D3 map and way too long article about it, even its title. Breakdown of the Brutalism architecture map",
    url:
      "https://medium.com/@PavelLaptev/the-simpliest-d3-map-and-way-too-long-article-about-it-even-its-title-fc0f1d0bdf3f?source=friends_link&sk=cb2aa1d0494d4b7d93f70a9f1a80e43d",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Design tokens with Figma",
    url:
      "https://medium.com/@PavelLaptev/design-tokens-with-figma-aef25c42430f",
    date: "0.0.0",
    new: false,
  },
  {
    title: "How to use custom fonts with FramerX",
    url:
      "https://medium.com/@PavelLaptev/how-to-use-custom-fonts-with-framerx-b8ee3895cce0",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Lesser-known CSS properties in GIFs",
    url:
      "https://medium.com/@PavelLaptev/lesser-known-css-properties-in-gifs-966a143497ba",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Professor Spot and Inputs Validation in FramerX",
    url:
      "https://blog.framer.com/professor-spot-and-inputs-validation-in-framer-x-83da6d35f771",
    date: "0.0.0",
    new: false,
  },
  {
    title: "How to use real data in FramerX",
    url: "https://blog.prototypr.io/use-real-data-in-framer-x-3801834e3f59",
    date: "0.0.0",
    new: false,
  },
  {
    title: "FramerX Beta overview and examples",
    url:
      "https://medium.com/@PavelLaptev/framer-x-beta-overview-and-examples-58dba80a6865",
    date: "0.0.0",
    new: false,
  },
  {
    title: "CSS weekly #2: An image on the left, text on the right",
    url:
      "https://medium.com/@PavelLaptev/css-weekly-2-an-image-on-the-left-text-on-the-left-a5e59b2acdb5",
    date: "0.0.0",
    new: false,
  },
  {
    title: "CSS weekly #1: Masonry layout",
    url:
      "https://medium.com/@PavelLaptev/css-weekly-1-masonry-layout-b26ae670accd",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Figma web API",
    url: "https://itnext.io/figma-web-api-c581ba769e04",
    date: "0.0.0",
    new: false,
  },
  {
    title: "One more time with AR",
    url:
      "https://medium.com/inborn-experience/one-more-time-with-ar-b8c93e689e3b",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Learning CSS grid layout with the Swiss",
    url:
      "https://blog.usejournal.com/learning-css-grid-with-the-swiss-2bd02e913fa",
    date: "0.0.0",
    new: false,
  },
  {
    title: "VR/AR prototyping for everyone",
    url:
      "https://medium.com/inborn-experience/vr-ar-prototyping-for-everyone-ea6fb8f159b5",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Three.js for beginers",
    url: "https://medium.com/@PavelLaptev/three-js-for-beginers-32ce451aabda",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Glitch-brush with PixiJS",
    url:
      "https://medium.com/@PavelLaptev/glitch-brush-with-pixijs-32f4d83e25cd",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Easy-breezy interactive 3d in Framer with Sketchfab API Utility",
    url:
      "https://blog.sketchfab.com/easy-breezy-interactive-3d-framerjs-sketchfab-api-utility",
    date: "0.0.0",
    new: false,
  },
  {
    title: "In search of lost parts",
    url: "https://medium.com/@PavelLaptev/in-search-of-lost-parts-43df21035a80",
    date: "0.0.0",
    new: false,
  },
  {
    title: "My ideal button",
    url: "https://medium.com/@PavelLaptev/my-ideal-button-13db014e1c8d",
    date: "0.0.0",
    new: false,
  },
  {
    title: "Japanese typography on the web — tips and tricks",
    url:
      "https://medium.com/@PavelLaptev/japanese-typography-on-the-web-tips-and-tricks-981f120ad20e",
    date: "0.0.0",
    new: false,
  },
];

export default articlesData;
