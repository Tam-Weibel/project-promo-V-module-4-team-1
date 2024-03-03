import React from 'react';
import '../scss/core/Variables.scss';
import '../scss/layout/Hero.scss';

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title"> PROYECTOS MOLONES </h1>
      <p className="hero__text">
      La forma más fácil de organizar y compartir tus proyectos online.
      </p>
    </div>
  );
}

export default Hero;
