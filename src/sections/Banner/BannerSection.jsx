import React from 'react'

const BannerSection = () => {
    return (
        <div className='banner-section'>
            <div className="overlay">
                <div className="overlay2">
                    <div className="container">
                        <div className="banner-text">
                            <h3 className='uppercase'>Play . Win . Earn</h3>
                            <h1 className='uppercase'>Blockchain Meme <span>Dog Racing </span>Platform</h1>
                            <p>Bet on your favorite crypto meme dogs, live on our platform</p>
                            <div className="banner-btns">
                                <button className='play-btn banner-btn'>play Now</button>
                                <button className='whitepaper-btn banner-btn'>Whitepaper</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection