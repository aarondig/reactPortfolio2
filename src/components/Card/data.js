import Project from "../Project";
import TravelPins from "../TravelPins";

export const items = [
  {
    id: "FactCheck",
    category: "Journalism",
    title: "Google Fact Checker",
    banner: "https://github.com/aarondig/factCheck/blob/main/assets/banner.png?raw=true",
    component: Project,

    icon: "fa-search",
    shadow: "#0073ff",
  },
  {
    id: "TravelPins",
    category: "Travel",
    title: "Travel Pins",
    component: TravelPins,
    icon: "fa-map-marker-alt",
    shadow: "#FBB034",
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    category: "Pedal Power",
    title: "Map Apps for the Superior Mode of Transport",
    component: 260,
    icon: "#5DBCD2",
    shadow: "#0073ffc3",
  }
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
