import React from 'react';
import dogImg from '../../assets/images/dogs/dog4.png';
import laptop from '../../assets/images/img/laptop.png';
import bgImg from '../../assets/images/bg/start-play-bg.png';

const StartPlaying = () => {
    return (
        <div className='start-playing-section'>
            <img src={bgImg} alt="bg-img" className='start-play-bg' />
            <div className="container">
                <div className="start-playing-content">
                    <h2 className='uppercase'>Stop Scrolling <br /> <span class="text--glitch">Start Playing</span></h2>
                    <p>Ready to play, have some fun & make money? Share your winnings, match history and win rate while you have fun with your favorite meme dogs.</p>
                    <div className="start-playing-img">
                        <img src={laptop} alt="img" className='laptop-img' />
                        <img src={dogImg} alt="img" className='dog-img' />
                    </div>
                    <div className="start-playing-btns">
                        <button className='play-btn playing-btn btn'>
                            <span className='btn-inner'>
                                <span className='btn-text'>play Now</span>
                                <span className='btn-text'>play Now</span>
                            </span>
                        </button>
                        <button className='buy-btn playing-btn btn'>
                            <span className='btn-inner'>
                                <span className='btn-text'>Buy Metadog</span>
                                <span className='btn-text'>Buy Metadog</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPlaying;
