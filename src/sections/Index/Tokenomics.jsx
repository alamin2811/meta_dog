import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import TokenAddress from '../../components/TokenAddress'
import TokenomicsChart from '../../components/TokenomicsChart'

import bnbIcon from '../../assets/images/coin/bnb.png'
import ethIcon from '../../assets/images/coin/eth.png'
import TokenomicsMobile from './TokenomicsMobile'

const tokenomicsData = [
    { label: 'LP & CEX Listings', value: 50 },
    { label: 'Presale', value: 35 },
    { label: 'Ecosystem Development', value: 10 },
    { label: 'Game Rewards & Airdrop', value: 5 },
  ];

const Tokenomics = () => {
  return (
    <div className='tokenomics-section' id="tokenomics">
        <div className="container">
            <SectionTitle
                titlePosition="text-center" title="Metadog Numbers" subtitle="Tokenomics"
            />
            <div className="tokenomics-content tokenomics-content-desktop">
                <p>METADOG token is going to be the native token of our ecosystem There will be 100 Billion of METADOG max token supply</p>
                <div className="tokenomics-data-section">
                    <div className="tokenomics-left">
                        <div className="tokenomics-data">
                            <h6><span>LP & CEX Listings</span> <span>50%</span></h6>
                            <h6><span>Presale</span> <span>35%</span></h6>
                            <TokenAddress coinImg={ethIcon} address="0x3281Af86aBD6Ffe19d4Cc86399d3458ADA0e58dE" parentClass="left" />
                        </div>
                    </div>
                    <div className="tokenomics-center">
                        <TokenomicsChart />
                    </div>
                    <div className="tokenomics-right">
                        <div className="tokenomics-data">
                            <h6><span>Ecosystem Development</span> <span>10%</span></h6>
                            <h6><span>Game Rewards & Airdrop</span> <span>5%</span></h6>
                            <TokenAddress coinImg={bnbIcon} address="0x3281Af86aBD6Ffe19d4Cc86399d3458ADA0e58dE" parentClass="right" />
                        </div>
                    </div>
                </div>
            </div>
            <TokenomicsMobile/>
        </div>
    </div>
  )
}

export default Tokenomics