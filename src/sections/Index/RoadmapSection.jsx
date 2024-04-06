import React from 'react'
import SectionTitle from './../../components/SectionTitle';
import roadmapShape from '../../assets/images/bg/road_img.png'
import spinIcon from '../../assets/images/icons/spin.png'

const RoadmapSection = () => {
    return (
        <div className='roadmap-section'>
            <div className="container">
                <SectionTitle titlePosition="text-center" title="Metadog Goals" subtitle="Roadmap" />
            </div>
            <div className="roadmap-content">
                <div className="shape"><img src={roadmapShape} alt="shape" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 pb-4">
                            <div className="roadmap-card">
                                <h5 className='card-title title-green'>Q3-Q4 2023</h5>
                                <ul className='custom-list'>
                                    <li className='done'>Social media & Website release</li>
                                    <li className='done'>Token Launch & Liquidity Lock</li>
                                    <li className='done'>MetaDog RACING BETA VERSION 1.0 MetaDog</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 pb-4">
                            <div className="roadmap-card">
                                <h5 className='card-title title-green'>Q4-Q1 (2023-2024)</h5>
                                <ul className='custom-list'>
                                    <li className='done'>MetaDog Game Main launch</li>
                                    <li className='done'>Telegram bot Launch</li>
                                    <li className='done'>Community AMA on Twitter</li>
                                    <li className='done'>In Game Reward</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 pb-4">
                            <div className="roadmap-card">
                                <h5 className='card-title'>Q2- 2024 <img src={spinIcon} alt="icon" className='spin' /></h5>
                                <ul className='custom-list'>
                                    <li className='done'>Game Update release</li>
                                    <li className='done'>Promoton & Marketing</li>
                                    <li className='not-done'>Revenue Distribution to Token Holders</li>
                                    <li className='not-done'>NFT Airdrop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 pb-4">
                            <div className="roadmap-card">
                                <h5 className='card-title'>Q3- 2024</h5>
                                <ul className='custom-list'>
                                    <li className='not-done'>Additional MetaDog Game release</li>
                                    <li className='not-done'>Revenue Distribution to Token Holders</li>
                                    <li className='not-done'>Promotion & Marketing</li>
                                    <li className='not-done'>Game UI Update</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadmapSection