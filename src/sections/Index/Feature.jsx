import React from 'react';
import icon1 from '../../assets/images/icons/buy.svg';
import icon2 from '../../assets/images/icons/share.svg';
import icon3 from '../../assets/images/icons/lock.svg';
import arrow from '../../assets/images/icons/yellow-arrow.svg';

const featuresData = [
    {
        icon: icon1,
        description: 'Buy, hold $MetaDog & participate in our revenue sharing',
        link: '#',
        buttonText: 'BUY METADOG'
    },
    {
        icon: icon2,
        description: 'Share a pool of all profit generated from betting on our meme dog racing with other $MetaDog holders',
        link: null, // Add your link here if applicable
        buttonText: null // Add button text if applicable
    },
    {
        icon: icon3,
        description: '$MetaDog contract is renounced with 100% of Liquidity Locked. Get Onboard & Start Playing',
        link: null, // Add your link here if applicable
        buttonText: null // Add button text if applicable
    }
];

const Feature = () => {
    return (
        <div className='feature-section'>
            <div className="container">
                <div className="row">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="col-lg-4 col-sm-6 pb-4">
                            <div className="feature-card-section">
                                <div className={`feature-card feature-card${index + 1}`}>
                                    <div className="feature-icon">
                                        <img src={feature.icon} alt="icon" />
                                    </div>
                                    <p>{feature.description}</p>
                                    {feature.link && <a href={feature.link}>{feature.buttonText}<img src={arrow} alt="icon" /></a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feature;
