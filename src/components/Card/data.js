import Project from "../Project";

export const items = [
  {
    id: "FactCheck",
    category: "Journalism",
    title: "Google Fact Checker",
    banner: "https://github.com/aarondig/factCheck/blob/main/assets/banner.png?raw=true",
    component: Project,

    backgroundColor: "#814A0E"
  },
  {
    id: "TravelPins",
    category: "Travel",
    title: "TravelPins",
    component: 120,
    backgroundColor: "#959684"
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    category: "Pedal Power",
    title: "Map Apps for the Superior Mode of Transport",
    component: 260,
    backgroundColor: "#5DBCD2"
  }
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
