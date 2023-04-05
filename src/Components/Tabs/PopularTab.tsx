import React from "react"
import { FaClock } from "react-icons/fa";

const PopularTab=({popularTabs})=>(
  <div className="tab-pane fade pt-4 active show" id="nx1-tabs-1" role="tabpanel">
  {popularTabs.slice(0, 6).map((item, index) =>(
  	<div className="single-post-list-wrap">
    <div className="media">
      <div className="media-left">
        <img src="https://solverwp.com/demo/react/nextpage/assets/img/post/list/1.png" alt="img" />
      </div>
      <div className="media-body">
        <div className="details">
          <div className="post-meta-single">
            <ul>
              <li>
                <FaClock />
               {item.webPublicationDate.slice(0,10)}
              </li>
            </ul>
          </div>
          <h6 className="list_title"  >
            <a href="#/blog-details">
             {item.webTitle.slice(0,42)}...
            </a>
          </h6>
        </div>
      </div>
    </div>
  </div>
  ))}
</div>
)
export default PopularTab