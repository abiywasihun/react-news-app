import React from 'react';
import Container from 'react-bootstrap/Container';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import Nav from 'react-bootstrap/Nav';
import { BsGoogle } from 'react-icons/bs';
import './Footer.css';

const Footer = ()=>{
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
		  <li><Nav.Link className="nav-social-media"><BsFacebook /></Nav.Link></li>
      <li><Nav.Link className="nav-social-media"><BsTwitter/></Nav.Link></li>
      <li><Nav.Link className="nav-social-media"><BsYoutube /></Nav.Link></li>
      <li><Nav.Link className="nav-social-media"><BsInstagram/></Nav.Link></li>
      <li><Nav.Link className="nav-social-media"><BsGoogle/></Nav.Link></li>
    </ul>
		<ul className="widget_nav_menu">
		<li><a href="#/autho">Author</a></li><li><a href="#/blog">Blog</a></li>
		<li><a href="#/cat-page">Tech News</a></li><li><a href="#/cat-fashion">Fashion</a></li>
		</ul><p className="text-slate-400">Copyright ©2023 Instant News</p></div></Container></div>
  );
};
export default Footer;