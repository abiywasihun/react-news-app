import React from 'react'
import { FaClock } from "react-icons/fa";


 const TrendingTab=({trendingNews})=>{
 	return(
	 <div className="tab-content " id="ex1-content">
        <div className="tab-pane fade show active">
          <div className="row">
            {trendingNews.slice(0, 1).map((item, index) =>(
            	<div className="thumb mb-4">
              <img
                className="w-100 h-60 object-cover"
                src={item.multimedia?.[0]?.url}
                alt="img"
              />
            </div>
            ))}
          {trendingNews.slice(1, 7).map((item, index) =>(
            <div key={item.id} className="col-sm-6">
              <div className="single-post-list-wrap">
                <div className="media">
                  <div className="media-left">
                    <img
                      src={item.multimedia?.[0]?.url}
                      alt="img"
                    />
                  </div>
                  <div className="media-body">
                    <div className="details">
                      <div className="post-meta-single">
                        <ul>
                          <li>
                            <FaClock />
                           {item.published_date.slice(0,10)}
                          </li>
                        </ul>
                      </div>
                      <h6 className="list_title" >
                        <a href="#/blog-details">
                         {item.title.slice(0,42)}...
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
             </div>
             ))}
          </div>
        </div>
      </div>
)}
export default TrendingTab