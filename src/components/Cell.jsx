import React, { useState } from "react";
import logo from "../ressources/ENGLITCH.png";
import { useSpring, animated as a } from "react-spring";

export default function Cell({ valeur, isDisplayed, onSelected }) {
  //const valeur_affiche = isDisplayed ? valeur : null;
  const valeur_affiche = isDisplayed ? valeur : null;
  const { transform, opacity } = useSpring({
    opacity: !isDisplayed ? 1 : 0,
    transform: `perspective(600px) rotateX(${!isDisplayed ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div className="memory-card" onClick={onSelected}>
      <a.div
        className="back-face"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform ,  backgroundColor: 'white',borderRadius: '15px'}}
      >
        <div className="card-value" style={{display: 'grid'}}><div style={{ margin: 'auto'}}>{valeur_affiche}</div>
        </div>
      </a.div>
      <a.div
        className="front-face"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          borderRadius: '25px'
        }}
      >
        <img className="front-face" style={{borderRadius: '15px'}} src={logo} alt="logoEnglitch" />
      </a.div>
    </div>
  );
}
