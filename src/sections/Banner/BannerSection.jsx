import React from 'react'
import sheildIcon from '../../assets/images/icons/sheild.svg'
import solidproofLogo from '../../assets/images/logo/solidproof-logo.png'
import CountdownTimer from '../../components/CountdownTimer'

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
                        <div className="banner-bottom-section">
                            <div className="banner-bottom-left">
                                <img src={sheildIcon} alt="" />
                                <p>Audit & KYC Certificate 100% Secure and Verified</p>
                            </div>
                            <img src={solidproofLogo} alt="img" />
                            <div className="banner-timer">
                                <h6>Presale Ends in</h6>
                                <h3><CountdownTimer/></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection