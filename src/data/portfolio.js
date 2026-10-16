// All portfolio content lives here so the components stay presentational.

import magridLogo from "../assets/images/experience/magrid.png";
import funtoryLogo from "../assets/images/experience/funtory.png";
import colonyLogo from "../assets/images/experience/colony11.png";
import iisLogo from "../assets/images/experience/iis.png";
import moolfaLogo from "../assets/images/experience/moolfa.png";
import sutLogo from "../assets/images/experience/sut.png";
import iustLogo from "../assets/images/experience/iust.png";

import magrid0 from "../assets/images/projects/magrid/magrid.jpg";

import hashtkhan0 from "../assets/images/projects/hashtkhan/Hashtkhan.jpg";
import hashtkhan1 from "../assets/images/projects/hashtkhan/gameplay.jpg";
import hashtkhan2 from "../assets/images/projects/hashtkhan/gameplay1.jpg";
import hashtkhan3 from "../assets/images/projects/hashtkhan/gameplay2.jpg";

import bridgeRun0 from "../assets/images/projects/bridgerun/icon.jpg";
import bridgeRun1 from "../assets/images/projects/bridgerun/gameplay0.png";
import bridgeRun2 from "../assets/images/projects/bridgerun/gameplay1.png";
import bridgeRun3 from "../assets/images/projects/bridgerun/gameplay2.png";

import playground0 from "../assets/images/projects/playground/playground_icon.jpg";
import playground1 from "../assets/images/projects/playground/mushroom.png";
import playground2 from "../assets/images/projects/playground/spidercube.png";
import playground3 from "../assets/images/projects/playground/lake.png";

import ninjaMagic0 from "../assets/images/projects/ninjamagic/ninjamagic0.jpg";
import ninjaMagic1 from "../assets/images/projects/ninjamagic/gameplay0.jpg";
import ninjaMagic2 from "../assets/images/projects/ninjamagic/gameplay1.jpg";

import monster0 from "../assets/images/projects/monster/icon.jpg";
import monster1 from "../assets/images/projects/monster/gameplay1.png";
import monster2 from "../assets/images/projects/monster/gameplay2.png";
import monster3 from "../assets/images/projects/monster/gameplay3.png";

import flyingHills0 from "../assets/images/projects/flyinghills/icon.jpg";
import flyingHills1 from "../assets/images/projects/flyinghills/flyinghills1.png";
import flyingHills2 from "../assets/images/projects/flyinghills/flyinghills2.png";
import flyingHills3 from "../assets/images/projects/flyinghills/flyinghills3.png";
import flyingHills4 from "../assets/images/projects/flyinghills/flyinghills4.jpg";
import flyingHills5 from "../assets/images/projects/flyinghills/flyinghills5.jpg";

import jumpUp0 from "../assets/images/projects/jumpup/jump_up.jpg";
import jumpUp1 from "../assets/images/projects/jumpup/jumpup1.jpg";
import jumpUp2 from "../assets/images/projects/jumpup/jumpup2.jpg";
import jumpUp3 from "../assets/images/projects/jumpup/jumpup3.jpg";

import core0 from "../assets/images/projects/core/Core.jpg";
import core1 from "../assets/images/projects/core/core1.png";
import core2 from "../assets/images/projects/core/core2.png";
import core3 from "../assets/images/projects/core/core3.png";

import rebel0 from "../assets/images/projects/rebel/Rose.jpg";
import rebel1 from "../assets/images/projects/rebel/Rebel1.png";
import rebel2 from "../assets/images/projects/rebel/Rebel2.png";
import rebel3 from "../assets/images/projects/rebel/Rebel3.png";
import rebel4 from "../assets/images/projects/rebel/Rebel4.png";

import hexa0 from "../assets/images/projects/hexadominoes/Icon.jpg";
import hexa1 from "../assets/images/projects/hexadominoes/gameplay1.png";
import hexa2 from "../assets/images/projects/hexadominoes/gameplay2.png";
import hexa3 from "../assets/images/projects/hexadominoes/gameplay3.png";

import waterfall0 from "../assets/images/projects/waterfall/waterfall0.jpg";
import waterfall1 from "../assets/images/projects/waterfall/waterfall1.png";
import waterfall2 from "../assets/images/projects/waterfall/waterfall2.png";

import parandthe from "../assets/images/arts/concept-art/ParandThe.jpg";
import strygwyr from "../assets/images/arts/concept-art/Strygwyr.JPG";
import nightmare from "../assets/images/arts/concept-art/Nightmare.jpg";
import stunningLook from "../assets/images/arts/concept-art/StunningLook.jpg";
import ged from "../assets/images/arts/concept-art/Ged.jpg";
import wanderer from "../assets/images/arts/concept-art/Wanderer.JPG";

import avatar from "../assets/images/header/Vahid.png";

export const profile = {
  name: "Vahid Bashiri",
  firstName: "Vahid",
  location: "Luxembourg",
  email: "gedbashiri@gmail.com",
  avatar,
  cv: `${process.env.PUBLIC_URL}/Vahid-Bashiri-CV.pdf`,
  roles: ["Game Developer", "Unity & C# Engineer", "Gameplay Programmer", "Tools & Systems Builder"],
  summary: [
    "Game developer with 6+ years building mobile games in Unity and C#. I design project architecture, build infrastructure and in-house tools, and implement the gameplay features players actually touch.",
    "I’ve shipped Jump Up, My Monster Pet, Ninja Magic and Flying Hills on Google Play — over 2 million downloads combined — and today I build the Magrid early-learning game. On the side I publish my own games, like Bridge Run, Rebel and Playground.",
  ],
  about: [
    "Game developer with 6+ years of experience focused on mobile games using Unity and C#. I enjoy every layer of a game: designing project architecture, building infrastructure systems, creating tools, and implementing gameplay features.",
    "Before games, I spent 2 years as a software engineer, and I hold an MSc in Software Engineering from Sharif University of Technology — my thesis was on predicting opponents’ movement in Dota 2.",
  ],
  interests:
    "Outside of work I design characters and draw fan art. Online games with friends are my favourite getaway, and indie games when I have time to sink into one. Rock and metal on the headphones; futsal and ping pong when I need to move.",
  socials: [
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/vbashiri/" },
    { name: "GitHub", icon: "github", url: "https://github.com/vbashiri/" },
    { name: "Medium", icon: "medium", url: "https://medium.com/@vbashiri1995" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/moolfa/" },
  ],
};

// category: "pro" = studio / client work, "personal" = indie, jam and academic work
export const projects = [
  {
    title: "Magrid",
    year: 2023,
    category: "pro",
    studio: "Magrid Learning Solution",
    genre: "Early-learning app",
    url: "https://magrid.education/",
    youtube: "JgEvOqgHU9k",
    thumbnail: magrid0,
    images: [],
    tags: ["Unity", "C#", "MVP", "Unit tests"],
    highlights: [
      "Shipped new content and features for a game live for 3+ years with full backward compatibility",
      "Built a shared library unifying models and validation across client and server",
      "Refactored to MVP with the Strategy pattern and dependency injection for high test coverage",
      "Developed an editor for designing new levels and games",
    ],
  },
  {
    title: "Hasht Khan",
    year: 2023,
    category: "pro",
    genre: "Collectible card game",
    url: "https://8khan.games/",
    youtube: "buiB7j0_QEI",
    thumbnail: hashtkhan0,
    images: [hashtkhan1, hashtkhan2, hashtkhan3],
    tags: ["Unity", "C#", "Card game"],
    highlights: [
      "First Persian card game in the spirit of Hearthstone",
      "Refactored the codebase and added new features for the game’s relaunch",
    ],
  },
  {
    title: "Bridge Run",
    year: 2022,
    category: "personal",
    genre: "Runner · Game jam",
    url: "https://play.google.com/store/apps/details?id=com.Moolfa.BridgeRun",
    thumbnail: bridgeRun0,
    images: [bridgeRun1, bridgeRun2, bridgeRun3],
    tags: ["Unity", "Game jam", "Google Play"],
    highlights: [
      "Created for Bazaar Game Jam 2022, then designed and developed from scratch to release",
      "Redesigned levels and mechanics based on player statistics",
    ],
  },
  {
    title: "My Monster Pet",
    year: 2021,
    category: "pro",
    studio: "Funtory",
    genre: "Virtual pet",
    url: "https://play.google.com/store/apps/details?id=com.funtory.monsterpet",
    thumbnail: monster0,
    images: [monster1, monster2, monster3],
    tags: ["Unity", "C#", "Character AI"],
    highlights: [
      "Developed character behaviour and interactions",
      "Helped design mechanics and polish the game",
    ],
  },
  {
    title: "Ninja Magic",
    year: 2020,
    category: "pro",
    studio: "Funtory",
    genre: "Action",
    url: "https://play.google.com/store/apps/details?id=com.funtory.jutsumaster",
    youtube: "sK3kcAYciy0",
    thumbnail: ninjaMagic0,
    images: [ninjaMagic1, ninjaMagic2],
    tags: ["Unity", "C#", "Upgrade systems"],
    highlights: [
      "Designed and developed from scratch to release, with two major iterations after launch",
      "Built 20+ distinct mechanics with an upgrade system",
    ],
  },
  {
    title: "Flying Hills",
    year: 2020,
    category: "pro",
    studio: "Funtory",
    genre: "Physics driving",
    url: "https://play.google.com/store/apps/details?id=com.funtory.flyingroad",
    youtube: "uXhJ2Au0gkM",
    thumbnail: flyingHills0,
    images: [flyingHills1, flyingHills2, flyingHills3, flyingHills4, flyingHills5],
    tags: ["Unity", "Mesh rendering", "Physics"],
    highlights: [
      "Built an optimized mesh-rendering system and a challenging physics-based vehicle as the core mechanic",
      "Worked closely with a designer through to completion",
    ],
  },
  {
    title: "Jump Up",
    year: 2020,
    category: "pro",
    studio: "Funtory",
    genre: "Arcade",
    url: "https://play.google.com/store/apps/details?id=com.funtory.jumpdunk",
    youtube: "gA4X6anOjBM",
    thumbnail: jumpUp0,
    images: [jumpUp1, jumpUp2, jumpUp3],
    tags: ["Unity", "C#", "Live ops"],
    highlights: [
      "Extended the game, increasing revenue by 100%",
      "Polished existing features in close collaboration with the game designer",
    ],
  },
  {
    title: "Playground",
    year: 2020,
    category: "personal",
    genre: "Tech showcase",
    url: "https://moolfa.itch.io/playground",
    youtube: "o1SbL0i7x1M",
    thumbnail: playground0,
    images: [playground1, playground2, playground3],
    tags: ["HLSL", "Shaders", "Simulation"],
    highlights: [
      "Each level is a minimal prototype exploring one idea",
      "Water simulation, rope physics and shader-driven features",
    ],
  },
  {
    title: "Core",
    year: 2019,
    category: "pro",
    studio: "Colony11",
    genre: "Hyper-casual",
    url: "https://www.dropbox.com/s/e4moj0qsm31rzfw/core.apk?dl=0",
    youtube: "5lT0E_rKQwY",
    thumbnail: core0,
    images: [core1, core2, core3],
    tags: ["Unity", "C#", "Team lead"],
    highlights: [
      "Designed and developed the game from scratch",
      "Managed a team of 3 people",
    ],
  },
  {
    title: "Rebel",
    year: 2019,
    category: "personal",
    genre: "Pixel-art platformer",
    url: "https://moolfa.itch.io/rebel",
    youtube: "kRbxADt-gVc",
    thumbnail: rebel0,
    images: [rebel1, rebel2, rebel3, rebel4],
    tags: ["Unity", "Pixel art", "Animation"],
    highlights: [
      "Designed and developed the game logic",
      "Worked on character design and animations — the hero scene on this site is from Rebel",
    ],
  },
  {
    title: "Hexa Dominoes",
    year: 2017,
    category: "personal",
    genre: "Puzzle",
    url: "https://play.google.com/store/apps/details?id=com.moolfa.dominocolor",
    thumbnail: hexa0,
    images: [hexa1, hexa2, hexa3],
    tags: ["Unity", "Level design"],
    highlights: [
      "My first published game on Google Play",
      "Developed the level manager and designed new levels",
    ],
  },
  {
    title: "Waterfall",
    year: 2016,
    category: "personal",
    genre: "Course project",
    url: "https://hvbashiri.itch.io/waterfall",
    thumbnail: waterfall0,
    images: [waterfall1, waterfall2],
    tags: ["Unity", "Animation"],
    highlights: [
      "Final project for the Fundamentals of Game Design course",
      "Worked on character animations and core gameplay mechanics",
    ],
  },
];

export const experience = [
  {
    role: "Game Developer",
    company: "Magrid Learning Solution",
    logo: magridLogo,
    period: "Jul 2023 — Present",
    current: true,
    tags: ["Unity", "C#", "MVP", "DI", "Smoke tests"],
    highlights: [
      "Ship features for a live early-learning game while keeping full backward compatibility",
      "Shared client/server library, MVP refactor and a custom level editor",
    ],
  },
  {
    role: "Game Developer",
    company: "Funtory",
    logo: funtoryLogo,
    period: "May 2021 — Oct 2023",
    tags: ["Unity", "C#", "Google Play Instant", "Analytics"],
    highlights: [
      "Shipped Jump Up, Ninja Magic, My Monster Pet and Flying Hills — Jump Up & My Monster Pet passed 2M+ downloads",
      "Built an asset-bundle SDK for Google Play Instant that made Robo Race the studio’s most profitable game",
      "Co-built in-house infrastructure with the CTO; ran workshops on Git, Unity DOTS and clean code",
    ],
  },
  {
    role: "Game Developer & Designer",
    company: "Colony11",
    logo: colonyLogo,
    period: "Oct 2020 — Dec 2020",
    tags: ["Unity", "C#", "Team lead"],
    highlights: ["Designed and built Core from scratch, leading a team of 3"],
  },
  {
    role: "React Native Developer",
    company: "Intelligent Information Solutions Center",
    logo: iisLogo,
    period: "Nov 2018 — Sep 2020",
    tags: ["React Native", "JavaScript", "Android"],
    highlights: ["Built the Motoshub app plus native Android libraries for file sharing and image editing"],
  },
  {
    role: "Freelance Game Developer",
    company: "Independent",
    logo: moolfaLogo,
    period: "Sep 2015 — Oct 2017",
    tags: ["Unity", "C#"],
    highlights: ["Hexa Dominoes and Waterfall"],
  },
];

export const education = [
  {
    degree: "MSc, Software Engineering",
    school: "Sharif University of Technology",
    logo: sutLogo,
    period: "2018 — 2021",
    note: "Thesis: Predicting opponent’s movement in Dota 2",
  },
  {
    degree: "BSc, Computer Engineering",
    school: "Iran University of Science and Technology",
    logo: iustLogo,
    period: "2013 — 2018",
  },
];

export const skills = [
  { group: "Engine & languages", items: ["Unity", "C#", "HLSL shaders", "Unity DOTS", "JavaScript", "React Native"] },
  { group: "Architecture", items: ["SOLID", "Design patterns", "MVP", "Dependency injection", "Unit & smoke testing"] },
  { group: "Game craft", items: ["Gameplay systems", "Custom editors & tools", "Performance optimization", "Physics & simulation"] },
  { group: "Live games", items: ["Live ops", "F2P monetization", "Economy design", "Game analytics", "Android plugins"] },
];

export const sketches = [parandthe, wanderer, strygwyr, nightmare, stunningLook, ged];
