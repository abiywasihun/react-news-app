import React from 'react';
import listIm from '../../assets/1l.png';
import topIm from '../../assets/24.png';
import { FaClock } from 'react-icons/fa';
const PopularList = ({ popularItems }:any)=>(
	<>
	{popularItems?.slice(0, 1).map((item, index) =>(
	<div key={index} className="single-post-wrap style-overlay">
    <div className="thumb">
      <img src={topIm} alt="img" />
      <a className="tag-base tag-blue" href="#/cat-page">
        {item.pillarName}
      </a>
    </div>
    <div className="details">
      <div className="post-meta-single">
        <p>
           <FaClock />
         {item.webPublicationDate.slice(0, 10)}
        </p>
      </div>
      <h6 className="titles" >
        <a href="#/blog-details"> {item.webTitle.slice(0, 42)}...</a>
      </h6>
    </div>
  </div>
	))}
  {popularItems?.slice(1, 4).map((item, index) =>(
  <div key={index} className="single-post-list-wrap">
    <div className="media">
      <div className="media-left">
        <img src={listIm} alt="img" />
      </div>
      <div className="media-body">
        <div className="details">
          <div className="post-meta-single">
            <ul>
              <li>
                <FaClock />
               {item.webPublicationDate.slice(0, 10)}
              </li>
            </ul>
          </div>
          <h6 className="list_title"  >
            <a href="#/blog-details">
              {item.webTitle.slice(0, 42)}...
            </a>
          </h6>
        </div>
      </div>
    </div>
  </div>
  ))}
  </>
);
export default PopularList;