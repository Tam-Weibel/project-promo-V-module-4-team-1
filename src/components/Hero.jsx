import React from 'react';
import '../scss/core/Variables.scss';
import '../scss/layout/Hero.scss';

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">Proyectos Molones</h1>
      <p className="hero__text">
        Escaparate en línea para recoger ideas a través de la tecnología.
      </p>
    </div>
  );
}

export default Hero;
