import React from 'react';
import listIm from '../../assets/1l.png';
import { FaClock } from 'react-icons/fa';

const PopularTab = ({ popularTabs }:any)=>(
  <div className="tab-pane fade pt-4 active show" id="nx1-tabs-1" role="tabpanel">
  {popularTabs.slice(0, 6).map((item, index) =>(
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
</div>
);
export default PopularTab;