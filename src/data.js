import plug_mate from "./img/plug_mate.png";
import mall_sim from "./img/mall_sim.png";
import thymoi from "./img/thymoi.png";
import telegrambot from "./img/telegrambot.png";
import ignite from "./img/ignite.png";
import keras from "./img/keras.png";
import timeseries from "./img/timeseries.png";
import portfolio from "./img/portfolio.png";

const ExperienceData = [
  {
    year: "2014",
    insti: "St Andrew's Junior College",
    desc: "Science Stream Student",
    experience:
      "I took my pre-university education here in these short two years, studying Physics, Mathematics, Chemistry and China-studies in English. Pre-university was my first step into academic rigor. I obtained 2 H2 distinctions for my exam result!",
  },
  {
    year: "2016",
    insti: "SAF MP Command",
    desc: "Security Specialist",
    experience:
      "In this role, I audited the security of other camps in the battalion by conducting spot checks and provided advice for how each unit could improve. I would produce a report for each audit for the perusal of commander MP Command. I also provided logistical support for ad-hoc events and branch needs.",
  },
  {
    year: "2018",
    insti: "Singapore University of Technology & Design",
    desc: "UG Scholarship Programme",
    experience:
      "I study in a university I am thoroughly proud of. I love the culture in this school: one that challenges you to innovate past your experiences and lead project teams. My field of study explores solving problems using mathematical modelling, which includes courses such as optimisation, machine learning and statisitcal thinking.",
  },
  {
    year: "2019",
    insti: "Cybersecurity Agency of Singapore",
    desc: "Cyber Threat Analyst Intern",
    experience:
      "I was given the task of writing a report that covers the landscape of the DDW (Deep and Dark Web), including the players and actions involved in the field. I gave a presentation to the Deputy Chief of CSA as well as threat monitoring teams in an effort to raise aware of the consequences of the DDW. ",
  },
  {
    year: "2020",
    insti: "MIT International Design Center",
    image:
      "https://www.flaticon.com/svg/vstatic/svg/2910/2910791.svg?token=exp=1612348466~hmac=c0d356a1b4fa286b4517e2ed4e94714c",
    desc: "Full Stack Developer Intern",
    experience:
      "I was part of a team to build an energy dashboard. The process started out by conducting academic research on the existing literature. Afterwards, we came up with prototypes to do UIUX interviews and focus group discussions. From there, we started development work by building the front-end using Plotly and the backend using Django. I helped by buildling a few features and also optimised memory usage of the backend processes by exporting client-side rendering to backend the PostgreSQL server.",
  },
];

const SDProjectsData = [
  {
    title: "Shopping Mall Simulator",
    desc:
      "Our project aims to find out how malls should optimise the number of entry points while working around the contraints to reduce the number of infections in a mall. Built using vanilla JS to run monte-carlo simulations, rendering mall shoppers as SVG images and running stoichastic infection models.",
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
      "Building a dashboard for office users to reduce energy usage. I was working together with a brilliant team where my role was to build graphs, conduct UI/UX interviews and to optimised memory usage of the backend processes by exporting client-side rendering to backend the PostgreSQL server.",
    imgsrc: plug_mate,
    tech: ["Django", "Plotly", "PostgreSQL", "UI/UX"],
    links: {
      github: "https://github.com/zeynepduygutekler/plug-mate",
      youtube: "https://www.youtube.com/watch?v=2Ud_u6VYUVo",
    },
  },
  {
    title: "Neumorphism Portfolio Site",
    desc:
      "A chance for me to express my love for this UI trend before it fades. Built with inspiration from other neumorphism templates and hosted using heroku.",
    imgsrc: portfolio,
    tech: ["Heroku", "React JS", "SCSS"],
    links: {
      github: "https://github.com/loocurse/portfolio",
    },
  },
  {
    title: "E-commerce Page",
    desc:
      "I built this as part of a web development course learning react and redux. Learnt how to manage states using a redux store and reducers, asychronously draw data from an API here and generate multiple react components.",
    imgsrc: ignite,
    tech: ["React JS", "Redux", "Framer-motion"],
    links: {
      github: "https://github.com/loocurse/ecommerce-react",
    },
  },
  {
    title: "RSVP Generator Telegram Bot",
    desc:
      "I was too tired of generating messages for people to indicate if they were coming for an event. This bot helps me by prompting me on details such as location, date and time and produces a beautiful message filled with lovely emojis. More than 50 unique users since creation, used weekly by no less than 10 users.",
    imgsrc: telegrambot,
    tech: ["Python", "Bot API", "Google Cloud Platform"],
    links: {
      github: "https://github.com/loocurse/RSVP_generator",
      "external-link-square": "https://t.me/south_rsvp_bot",
    },
  },
  {
    title: "Thymoi Smart Locker",
    desc:
      "Our team implemented a Smart Locker System as part of our 1D Smart Campus Group Project for 10.009 The Digital World module at SUTD. The Smart Locker System is a dynamic storage solution that automates the process of short-term locker usage and makes use of cloud database information to update locker availability.",
    imgsrc: thymoi,
    tech: ["Python", "Kivy GUI", "Linux", "Firebase"],
    links: {},
  },
];

const DAProjectsData = [
  {
    title: "Securities Volatility Time Series Analysis",
    desc:
      "Project with AXA Investment Managers to build a company-level predictive model to identify shares with low future volatility by using a company's fundamental data with trailing returns. Utilised data exploration libraries such as pandas profiling to identify possible feature engineering opportunities. Identified autocorrelation opportunity to run time series analysis. Compared to a baseline moving average model, our ARIMA model outperformed it 87% of the time.",
    imgsrc: timeseries,
    tech: ["Time Series", "Pandas", "ARIMA"],
    links: {
      github: "https://github.com/loocurse/a-shares_analysis",
    },
  },
  {
    title: "Tweet Sentiment Classification Analysis",
    desc:
      "This was a data analytics competition on kaggle conducted by my professors for our analytics module. Our team used NLP cleaning techniques such as stop-words removal, word stemming and lemmatisation to vectorise the input tweets. Ran a neural network with output layer as a rectified linear activation function and dropout functions; achieved an accuracy of 90% for 3-sentiment tweet analysis.",
    imgsrc: keras,
    tech: ["Keras", "R", "NLP"],
    links: {
      github: "https://github.com/loocurse/tweet-sentiment-analysis",
    },
  },
];
export { ExperienceData, SDProjectsData, DAProjectsData };
