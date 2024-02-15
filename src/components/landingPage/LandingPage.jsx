import React from 'react';
import Hero from '../Hero';
import ButtonCreateCard from '../ButtonCreateCard';
import ButtonSeeProjects from '../ButtonSeeProjects';


function LandingPage() {
  return (
    <main className='main'>
      <Hero />
      <div className="twoButtons">
          <ButtonCreateCard />
          <ButtonSeeProjects />
      </div>
    </main>
  );
}

export default LandingPage;
