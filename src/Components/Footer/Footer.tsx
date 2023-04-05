import React from 'react'
import Container from 'react-bootstrap/Container';
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import './Footer.css'

const Footer =()=>{
	return (
		<div className="footer-area">
		<Container>
		<div className="footer-top text-center">
		<div className="logo">
		 <a className="text-5xl no-underline" href="#alt">
			    Instant News
			    </a>
		</div>
		<ul className="social-area">
		<li><a className="facebook-icon" href="#facebook">
		<BsFacebook /></a></li>
		<li><a className="twitter-icon" href="#twitter">
		<BsTwitter /></a></li>
		<li><a className="youtube-icon" href="#youtube">
		<BsYoutube /></a></li>
		<li><a className="instagram-icon" href="#instagram">
		<BsInstagram /></a></li>
		<li><a className="google-icon" href="#google">
		<BsGoogle /></a></li></ul></div>
		<div className="footer-bottom text-center go-top">
		<ul className="widget_nav_menu">
		<li><a href="#/autho">Author</a></li><li><a href="#/blog">Blog</a></li>
		<li><a href="#/cat-page">Tech News</a></li><li><a href="#/cat-fashion">Fashion</a></li>
		</ul><p className="text-slate-400">Copyright ©2023 Instant News</p></div></Container></div>
		)
}
export default Footer