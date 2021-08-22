import { React, useState } from "react";
import "./carousel.scss";
import classes from './style/Images.module.css'
import austria from './img/austria.jpeg'
import colombia from './img/colombia.jpeg'
import italy from './img/italy.jpeg'
import mountain from './img/mountain.jpeg'
import sunrise from './img/sunrise.jpeg'

function Carousel() {
  
  const DATA = [
    { id:1,src: austria, title: "austria" },
    { id:2,src: colombia, title: "colombia" },
    { id:3,src:italy, title: "italy" },
    { id:4,src:mountain, title: "mountain" },
    { id:5,src: sunrise, title: "sunrise" },
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
            <img src={item.src} className={classes.image} alt={item.title}/>
          </div>
        );
      })}
      <button className="carousel__buttons" id="left" onClick={goLeft}>
        left
      </button>
      <button className="carousel__buttons" id="right" onClick={goRight}>
        right
      </button>
      <h2>Deneeme</h2>
     
    </div>
    
  );
}

export default Carousel;
