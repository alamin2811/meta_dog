import React from 'react';
import logo from '../../assets/images/logo/logo.png';
import twitter from '../../assets/images/icons/twitter.svg';
import fb from '../../assets/images/icons/fb.svg';
import telegram from '../../assets/images/icons/telegram.svg';
import discord from '../../assets/images/icons/discord.svg';
import medium from '../../assets/images/icons/medium.svg';
import sheildIcon from '../../assets/images/icons/sheild.svg'
import solidproofLogo from '../../assets/images/logo/solidproof-logo.png'

const FooterSection = () => {
  // Define social media data as an array of objects
  const socialMediaData = [
    { icon: twitter, url: '#' },
    { icon: fb, url: '#' },
    { icon: telegram, url: '#' },
    { icon: discord, url: '#' },
    { icon: medium, url: '#' }
  ];

  // Define footer menu data as an array of objects
  const footerMenuData = [
    { title: 'Presale 🎉', url: '#' },
    { title: 'About Us', url: '#aboutSection' },
    { title: 'Tokenomics', url: '#tokenomics' },
    { title: 'Roadmap', url: '#roadmap' },
    { title: 'FAQ', url: '#fqSection' }
  ];

  return (
    <div className='footer-section'>
      <div className="overlay">
        <div className="container">
          <div className="footer-card">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-left">
                  <a href='#' className="footer-logo">
                    <img src={logo} alt="logo" />
                  </a>
                  <div className="row">
                    <div className="col-md-6">
                      <p>Copyright © <a href="#">MetaDog</a>, 2024 All rights reserved.</p>
                    </div>
                    <div className="col-md-6">
                      <div className="footer-menu">
                        <ul className='custom-list'>
                          {/* Mapping over the footer menu data to render each menu item */}
                          {footerMenuData.map((menuItem, index) => (
                            <li key={index}>
                              <a href={menuItem.url}>{menuItem.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-right">
                  <h3>Official Community</h3>
                  <div className="footer-social-list">
                    <ul className='custom-list'>
                      {/* Mapping over the social media data to render each icon */}
                      {socialMediaData.map((socialMedia, index) => (
                        <li key={index}>
                          <a href={socialMedia.url} target="_blank">
                            <img src={socialMedia.icon} alt="icon" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="footer-right-bottom-section">
                    <div className="footer-right-bottom-left">
                      <img src={sheildIcon} alt="img" />
                      <p>Audit & KYC Certificate 100% Secure and Verified</p>
                    </div>
                    <img src={solidproofLogo} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;


