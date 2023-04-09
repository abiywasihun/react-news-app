import React from 'react';
import Container from 'react-bootstrap/Container';
import { SocialMediaLink } from '../NavItem/SocialMediaLink';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <div className="footer-top text-center">
          <div className="logo">
            <a className="text-5xl no-underline text-white" href="#alt">
              Instant News
            </a>
          </div>
          <ul className="social-area">
          <SocialMediaLink />
          </ul>
          <ul className="widget_nav_menu">
            <li><a href="#/autho">Author</a></li>
            <li><a href="#/blog">Blog</a></li>
            <li><a href="#/cat-page">Tech News</a></li>
            <li><a href="#/cat-fashion">Fashion</a></li>
          </ul>
          <p className="text-slate-400">
            Copyright ©2023 Instant News
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;