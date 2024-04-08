import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import aboutBg from '../../assets/images/bg/about-bg-phn.png'

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='about-section' id='aboutSection'>
      <div className="container">
        <div className="about-card">
          <img src={aboutBg} alt="img" className='about-bg' />
          <div className={`overlay ${showMore ? 'active' : ''}`}>
            <div className="about-text">
              <SectionTitle titlePosition="left" title="Turn your passion into profits" subtitle="About MetaDog" />
              <div className="about-us-content">
                <p>MetaDog is fun & exciting crypto Dog racing Game & Betting platform on web3 which allows you to bet on your favorite meme dog tokens. Our Goal is to provide a unique, exciting and yet fun platform for meme dog community. </p>
                <p className={showMore ? '' : 'hide'}>We are the first & only web3 meme dog racing platform. On MetaDog Games each racing dogs represents the top 6 meme dog token on blockchain, all the race will take place on XD Arena Stadium, & you will be able to watch & bet on the games real time online and also on telegram using our telegram bot coming soon.</p>
                <p className={showMore ? '' : 'hide'}>MetaDog is going to house many meme dog racing games giving you total power to decide on what game you enjoy more. please take your time to go through our Roadmap and also our team whitepaper to understand more about what we are building</p>
                <h6 href="#" className='show-more' onClick={toggleShowMore}>
                  {showMore ? 'Show Less' : 'Show More'}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
