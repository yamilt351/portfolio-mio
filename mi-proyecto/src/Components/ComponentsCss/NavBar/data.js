import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import {FaMastodon} from "react-icons/fa"
export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 3,
    url: "/Projects",
    text: "Projects",
  },
  {
    id: 4,
    url: "/About",
    text: "About Me",
  },
  
];

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/yamil-tauil/",
    icon: <AiFillLinkedin />,
  },

  {
    id: 3,
    url: "https://mastodon.social/web/@Another7330",
    icon: <FaMastodon />,
  },
  {
    id: 4,
    url: "https://github.com/yamilt351",
    icon: <AiFillGithub />,
  },
];
