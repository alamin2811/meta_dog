import React from 'react'
import affileatsImg from '../../assets/images/img/affileats-img.png'
const Affiliate = () => {
    return (
        <div className='affiliate-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="affiliate-text">
                            <div className="section-title">
                                <h6 className='title uppercase'>Affiliate Program</h6>
                            </div>
                            <h4>Invite Friends & Get percent Rewards on all deposits. Join MetaDog Affiliate Program & start earning Today.</h4>
                            <button className='join-btn'>Join Affiliate</button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="affiliate-img">
                            <img src={affileatsImg} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Affiliate