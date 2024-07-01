import "./Background.css";
import jk from "../img/bg.jpeg"
import jk2 from "../img/bg2.jpg"
import v from "../img/bg3.jpg"
import v1 from "../img/bg4.jpg"
import jimin from "../img/bg5.jpg"
import jimin1 from "../img/bg6.jpg"
import jhope from "../img/bg7.jpg"
import jhope1 from "../img/bg8.jpeg"
import suga from "../img/bg9.jpg"
import suga1 from "../img/bg.jpeg"
import suga2 from "../img/bg2.jpg"
import jin from "../img/bg3.jpg"
import jin1 from "../img/bg4.jpg"
import rm from "../img/bg5.jpg"
import rm1 from "../img/bg6.jpg"

import React, { useEffect } from "react";

const COUNT = 100;
const SIZES = [
  "rainDrop--s",
  "rainDrop--m",
  "rainDrop--l",
  "rainDrop--xl",
];

/*
const EMOJIES = [

];*/
/*
"🐨",        
    "💜",
    "🎈",
    "🐹",
    "🐱",
    "🐿️",
    "🐥",
    "🐻",
    "🐯",
    "🐰",
    "🐋",
    "🫰",
    "🔍",
    ""⍤⃝",

    
        "Kim Namjoon",
    "Kim SeokJin",
    "Min Yoongi",
    "Jung Hoseok",
    "Park Jimin",
    "Kim Taehyung",
    "Jeon JungKook",
    */



const Background = () => {
  useEffect(() => {
    const rainContainer = document.querySelector(".rain-container");

    const genRainDrop = (size, xStart, xEnd, yStart, imageSrc) => {
      const myEmoji = document.createElement("div");
      //myEmoji.innerText = emoji;
      myEmoji.classList.add("rainDrop", size);
      myEmoji.style.setProperty("--x-start", `${xStart}vw`);
      myEmoji.style.setProperty("--x-end", `${xEnd}vw`);
      myEmoji.style.setProperty("--y-start", `${yStart}vh`);
     // myEmoji.style.setProperty("--y-end", `${yStart + 200}vh`);

     const image = document.createElement("img");
     image.src=imageSrc;
     image.style.width = "10rem ";
     image.style.height = "12rem"

     myEmoji.appendChild(image)

      return myEmoji;
    };

    const randFromList = (items) => {
      return items[Math.floor(Math.random() * items.length)];
    };

    const getRamdom = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    for (let i = 0; i < COUNT; i++) {
      const size = randFromList(SIZES);
      const xStart = getRamdom(0, 100);
      const xEnd = getRamdom(xStart - 20, xStart + 20);
      const yStart = getRamdom(-100, 0);
      //const emoji = randFromList(EMOJIES);

      const imageSrc = randFromList([jk, jk2, jhope, jhope1, suga, suga1, suga2, rm, rm1, jimin, jimin1, v1, v, jin, jin1])

      rainContainer.appendChild(genRainDrop(size, xStart, xEnd, yStart, imageSrc));
    }
  }, []);

  return (
    <div className="rain-container">
    </div>
  );
};

export default Background;
