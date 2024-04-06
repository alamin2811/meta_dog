import React from 'react'
import copyIcon from '../assets/images/icons/copy-icon.svg'

const TokenAddress = ({coinImg, address, parentClass}) => {
    return (
        <div className={`wallte-address ${parentClass}`}>
            <img src={coinImg} alt="icon" coin-img />
            <h5><span>Token Address</span> <span className='token-assress'>{address}</span></h5>
            <span className='copy-address'><img src={copyIcon} alt="copy" /></span>
        </div>
    )
}

export default TokenAddress