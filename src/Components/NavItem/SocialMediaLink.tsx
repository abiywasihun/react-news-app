import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsGoogle } from 'react-icons/bs';
import Nav from 'react-bootstrap/Nav';



export const SocialMediaLink = () =>(
	<>
    <li><Nav.Link className="nav-social-media"><BsFacebook /></Nav.Link></li>
    <li><Nav.Link className="nav-social-media"><BsTwitter/></Nav.Link></li>
    <li><Nav.Link className="nav-social-media"><BsYoutube /></Nav.Link></li>
    <li><Nav.Link className="nav-social-media"><BsInstagram/></Nav.Link></li>
    <li><Nav.Link className="nav-social-media"><BsGoogle/></Nav.Link></li>
    </>
);