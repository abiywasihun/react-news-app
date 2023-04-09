import { FaClock } from 'react-icons/fa';
import React from 'react';


const TrendingCards = ({ trendingNews }:any)=>(
  <>
   {trendingNews.map((item, index) =>(
   <div key={index} className="single-post-wrap style-overlay-bg">
    <div className="thumb">
      <img src={item.multimedia[0].url} alt="img" />
    </div>
    <div className="details">
      <div className="post-meta-single">
        <ul>
          <li className="mb-1.5">
            <a className="tag-base tag-blue" href={item.url}>
              {item.item_type}
            </a>
          </li>
          <li className="mb-1.5">
            <p className="flex items-center gap-2.5 m-0">
             <FaClock /> 
              {item.published_date.slice(0, 10)}
            </p>
          </li>
        </ul>
      </div>
      <h6 className="card_title">
        <a href={item.url}>
         {item.title.slice(0, 37)}...
        </a>
      </h6>
    </div>
  </div>
   ))}
   </>
);

export default  TrendingCards;