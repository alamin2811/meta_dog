import React from 'react'
import metadogImg from '../../assets/images/img/meta-dog-img.png'
import SectionTitle from './../../components/SectionTitle';
const BuyMetadog = () => {
    return (
        <div className='buy-metadog-section'>
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-md-7">
                        <div className="buy-metadog-text">
                            <SectionTitle title="buy-metadog Program" subtitle="Introducing Revenue sharing" />
                            <p>On MetaDog you have many ways to earn, bet on our dog races or buy & hold $MetaDog token you hold. we have built this to be fun and exciting for the crypto meme community.</p>
                            <button className='buy-metadog-btn'>Buy Metadog</button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="buy-metadog-img">
                            <img src={metadogImg} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyMetadog