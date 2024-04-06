import React from 'react'
import ArrowTop from '../../assets/images/icons/arrow-top.svg'

const FooterBottom = () => {
  return (
    <div className='footer-bottom'>
        <ul className='custom-list'>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Whitepaper</a></li>
        </ul>
        <a href="#">Back to Top <img src={ArrowTop} alt="icon" /></a>
    </div>
  )
}

export default FooterBottom