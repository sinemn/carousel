import { React, useState } from "react";
import "./carousel.scss";
import Images from "./components/Images";

function Carousel() {
  
  const DATA = [
    { id:1,src: "'./img/austria.jpeg'", title: "austria" },
    { id:2,src: "./img/colombia.jpeg", title: "colombia" },
    { id:3,src: "./img/italy.jpeg", title: "italy" },
    { id:4,src: "./img/mountain.jpeg", title: "mountain" },
    { id:5,src: "./img/sunrise.jpeg", title: "sunrise" },
  ];
  let carArr = DATA.length;
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (carArr - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (carArr- 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="carousel">
      {DATA.map((item, index) => {
          
        return (
            
          <div
            key={index}
            className="carousel__item"
            style={{ transform: `translateX(${x}%)` }}
          >
            <Images src={item}/>
          </div>
        );
      })}
      <button className="carousel__buttons" id="left" onClick={goLeft}>
        left
      </button>
      <button className="carousel__buttons" id="right" onClick={goRight}>
        right
      </button>
    </div>
  );
}

export default Carousel;
