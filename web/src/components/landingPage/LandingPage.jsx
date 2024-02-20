import React from 'react';
import Hero from '../Hero';
import ButtonCreateCard from '../ButtonCreateCard';
import ButtonSeeProjects from '../ButtonSeeProjects';
import '../../scss/layout/LandingPage.scss';



function LandingPage() {
  return (
    <main className='main'>
      <Hero />
      <div className="landingBtns">
          <ButtonCreateCard />
          <ButtonSeeProjects />
      </div>
    </main>
  );
}

export default LandingPage;
