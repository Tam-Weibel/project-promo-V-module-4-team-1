import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import ButtonCreateCard from '../ButtonCreateCard';
import ButtonSeeProjects from '../ButtonSeeProjects';
import Card from '../Card';
import '../../scss/layout/LandingPage.scss';
import '../../scss/layout/Card.scss';
import '../../scss/layout/Hero.scss';

function LandingPage({ formData }) {
  return (
    <main className='main'>
      <Hero />
      <div className='landingBtns'>
        <ButtonCreateCard />
        <ButtonSeeProjects />
      </div>
      <div className='landingCard'>
        <Card project={formData} />
      </div>
    </main>
  );
}
LandingPage.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default LandingPage;
