import React from 'react';
import Projects from './Projects';
import AboutTrailista from './projects/trailista/AboutTrailista';
import AboutOutfitsOnTheGo from './projects/outfits-on-the-go/AboutOutfitsOnTheGo';
import AboutSwoleNews from './projects/swole-news/AboutSwoleNews';
import AboutWanderList from './projects/wanderlist/AboutWanderList';
import HeaderName from '.././HeaderName';
import ScrollToTop from '.././ScrollToTop';

const Portfolio = () => {
  return (
    <div>
      <div className='portfolio'>
        <div className='portfolio-right-col'>
          <div className='about-container'>
            <AboutTrailista />
            <AboutOutfitsOnTheGo/>
            <AboutSwoleNews />
            <AboutWanderList />
          </div>
          <div className="portfolio-footer-fwd-container">
            <div className="portfolio-footer-fwd">
              <a href='/life'>Life&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className='portfolio-left-col'>
          <div className='header-name-red'><HeaderName /></div>
          <div className='portfolio-header'>Portfolio.</div>
            <Projects />
            <div id="portfolio-footer-container" className="scroll-to-top-dark">
              <ScrollToTop />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
