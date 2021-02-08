import plug_mate from "./img/plug_mate.png";
import mall_sim from "./img/mall_sim.png";
import thymoi from "./img/thymoi.png";
import telegrambot from "./img/telegrambot.png";
import ignite from "./img/ignite.png";
import keras from "./img/keras.png"
import timeseries from "./img/timeseries.png"

const ExperienceData = [
  {
    year: "2014",
    insti: "St Andrew's Junior College",
    image:
      "https://www.flaticon.com/svg/vstatic/svg/1940/1940611.svg?token=exp=1612348270~hmac=5ffe386f0c57efdb1614228434ca93eb",
    desc: "Obtained 2 H2 distinctions",
  },
  {
    year: "2016",
    insti: "SAF MP Command",
    image:
      "https://www.flaticon.com/svg/vstatic/svg/1022/1022331.svg?token=exp=1612348319~hmac=1dce2c8010b808a7d67a196a5fdfbd96",
    desc: "S2 Branch Specialist",
  },
  {
    year: "2018",
    insti: "Singapore University of Technology & Design",
    image:
      "https://www.flaticon.com/svg/vstatic/svg/1940/1940611.svg?token=exp=1612348270~hmac=5ffe386f0c57efdb1614228434ca93eb",
    desc: "Engineering Systems Design",
  },
  {
    year: "2019",
    insti: "Cybersecurity Agency of Singapore",
    image:
      "https://www.flaticon.com/svg/vstatic/svg/2910/2910791.svg?token=exp=1612348466~hmac=c0d356a1b4fa286b4517e2ed4e94714c",
    desc: "Dark Web OSINT Researcher Intern",
  },
  {
    year: "2020",
    insti: "MIT International Design Center",
    image:
      "https://www.flaticon.com/svg/vstatic/svg/2910/2910791.svg?token=exp=1612348466~hmac=c0d356a1b4fa286b4517e2ed4e94714c",
    desc: "Full Stack Developer Intern",
  },
];

const SDProjectsData = [
  {
    title: "Shopping Mall Simulator",
    desc:
      "Our project aims to find out how malls should optimise the number of entry points while working around the contraints to reduce the number of infections in a mall.",
    imgsrc: mall_sim,
    tech: ["HTML", "CSS", "Javascript", "D3.js"],
    links: {
      github: "https://github.com/Reuben-Tan/safeentry_simulation",
      vimeo: "https://vimeo.com/488350709",
      "external-link-square": "https://safeentry-sim.herokuapp.com/",
    },
  },
  {
    title: "Energy Dashboard",
    desc:
      "Buildling a dashboard for office users to reduce energy usage. I was working together with a brilliant team where my role was to build graphs, conduct UI/UX interviews and to manage the data processing on the backend.",
    imgsrc: plug_mate,
    tech: ["Django", "Plotly", "React JS", "UI/UX"],
    links: {
      github: "https://github.com/zeynepduygutekler/plug-mate",
      youtube: "https://www.youtube.com/watch?v=2Ud_u6VYUVo",
    },
  },
  {
    title: "E-commerce Page",
    desc:
      "I built this as part of a web development course learning react and redux. Learnt how to manage states using a redux store and reducers, asychronously draw data from an API here and generate multiple react components.",
    imgsrc: ignite,
    tech: ["React JS", "Redux", "Framer-motion"],
    links: {
      github: "https://github.com/zeynepduygutekler/plug-mate",
    },
  },
  {
    title: "RSVP Generator Telegram Bot",
    desc:
      "I was too tired of generating messages for people to indicate if they were coming for an event. This bot helps me by prompting me on details such as location, date and time and produces a beautiful message filled with lovely emojis that holds no congruence to the joy I experience doing RSVP's.",
    imgsrc: telegrambot,
    tech: ["Python", "Bot API", "Google Cloud Platform"],
    links: {
      github: "https://github.com/loocurse/RSVP_generator",
      "external-link-square": "https://t.me/south_rsvp_bot",
    },
  },
  {
    title: "Thymoi",
    desc:
      "OurCreated a Smart Locker System as part of our 1D Smart Campus Group Project for 10.009 The Digital World module at SUTD. The Smart Locker System is a dynamic storage solution that automates the process of short-term locker usage. It aims to make use of cloud database information to update locker availability.",
    imgsrc: thymoi,
    tech: ["Python", "Kivy GUI", "Linux", "Firebase"],
    links: {},
  },
];

const DAProjectsData = [
  {
    title: "Securities Volatility Time Series Analysis",
    desc:
      "Project with AXA Investment Managers to build a company-level predictive model to identify shares with low future volatility by using a company's fundamental data with trailing returns.",
    imgsrc: timeseries,
    tech: ["Time Series", "Pandas", "ARIMA"],
    links: {
      github: "https://github.com/loocurse/a-shares_analysis",
    },
  },
  {
    title: "Tweet Sentiment Analysis",
    desc:
      "This was a data analytics competition on kaggle conducted by my professors for our Analytics module. Our team achieved an accuracy of 90% for 3-sentiment tweet analysis using keras' neural networks with text vectorisation",
    imgsrc: keras,
    tech: ["Keras", "R", "NLP"],
    links: {
      github: "https://github.com/loocurse/tweet-sentiment-analysis",
    },
  },
  
];
export { ExperienceData, SDProjectsData, DAProjectsData };
