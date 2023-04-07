import React from 'react';
import Col from 'react-bootstrap/Col';
import searchImg from '../../assets/1s.png';
import { FaUser } from 'react-icons/fa';

const SearchCard = ({ item, index }:any)=>(

		<Col key={index} xs={6} md={4}>
		  	<div className="single-post-wrap style-box">
		    <div className="thumb">
		      <img src={searchImg} alt="img" />
		    </div>
		    <div className="details">
		      <div className="post-meta-single mb-4 pt-1">
		        <ul className="flex items-center justify-between">
		          <li>
		            <a className="tag-base tag-light-blue" href={item.url}>
		              Tech
		            </a>
		          </li>
		          <li>
		            <FaUser />
		            {item.author}
		          </li>
		        </ul>
		      </div>
		      <h6 className="card_title">
		        <a href={item.url}>
		          {item.title.slice(0, 46)}...
		        </a>
		      </h6>
		      <p>{item.title.slice(0, 46)}...</p>
		      <a className="btn btn-base mt-4" href={item.url}>
		        Read more
		      </a>
		    </div>
		  </div>
		</Col>
);

export default SearchCard;