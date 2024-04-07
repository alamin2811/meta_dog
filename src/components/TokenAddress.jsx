import React, { useState } from 'react';
import copyIcon from '../assets/images/icons/copy-icon.svg';
import checkIcon from '../assets/images/icons/check.svg';

const TokenAddress = ({ coinImg, address, parentClass }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <div className={`wallte-address ${parentClass}`}>
            <img src={coinImg} alt="icon" className='coin-img' />
            <h5>
                <span>Token Address</span>
                <span className='token-address'>{address}</span>
            </h5>
            <span className='copy-address' onClick={copyToClipboard}>
                {copied ? <img src={checkIcon} alt="copy" /> : <img src={copyIcon} alt="copy" />}
            </span>
        </div>
    );
};

export default TokenAddress;
