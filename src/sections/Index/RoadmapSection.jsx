import React from 'react';
import SectionTitle from './../../components/SectionTitle';
import roadmapShape from '../../assets/images/bg/road_img.png';
import spinIcon from '../../assets/images/icons/spin.png';

const RoadmapSection = () => {
    // Define roadmap data as an array of objects
    const roadmapData = [
        {
            quarter: 'Q3-Q4 2023',
            tasks: [
                { title: 'Social media & Website release', done: true },
                { title: 'Token Launch & Liquidity Lock', done: true },
                { title: 'MetaDog RACING BETA VERSION 1.0 MetaDog', done: true }
            ]
        },
        {
            quarter: 'Q4-Q1 (2023-2024)',
            tasks: [
                { title: 'MetaDog Game Main launch', done: true },
                { title: 'Telegram bot Launch', done: true },
                { title: 'Community AMA on Twitter', done: true },
                { title: 'In Game Reward', done: true }
            ]
        },
        {
            quarter: 'Q2- 2024',
            tasks: [
                { title: 'Game Update release', done: true },
                { title: 'Promoton & Marketing', done: true },
                { title: 'Revenue Distribution to Token Holders', done: false },
                { title: 'NFT Airdrop', done: false }
            ]
        },
        {
            quarter: 'Q3- 2024',
            tasks: [
                { title: 'Additional MetaDog Game release', done: false },
                { title: 'Revenue Distribution to Token Holders', done: false },
                { title: 'Promotion & Marketing', done: false },
                { title: 'Game UI Update', done: false }
            ]
        }
    ];

    return (
        <div className='roadmap-section' id="roadmap">
            <div className="container">
                <SectionTitle titlePosition="text-center" title="Metadog Goals" subtitle="Roadmap" />
            </div>
            <div className="roadmap-content">
                <div className="shape"><img src={roadmapShape} alt="shape" /></div>
                <div className="container">
                    <div className="row">
                        {roadmapData.map((item, index) => (
                            <div className="col-md-3 pb-4" key={index}>
                                <div className="roadmap-card">
                                    <h5 className={`card-title ${item.quarter.includes('Q2') ? 'title-spin' : 'title-green'}`}>
                                        {item.quarter}
                                        {item.quarter.includes('Q2') && <img src={spinIcon} alt="icon" className='spin' />}
                                    </h5>
                                    <ul className='custom-list'>
                                        {item.tasks.map((task, idx) => (
                                            <li key={idx} className={task.done ? 'done' : 'not-done'}>{task.title}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoadmapSection;
