import React from "react";
import "./NewsCard.css";
import { Link } from "react-router-dom";
function NewsCard({ Item }) {
  const str = Item.description;
 
  return (
    <div className="NewsCard">
      <div className="NewsCardImg">
        <img src={Item.urlToImage} alt="" />
      </div>
      <div className="NewsCardTitle">
        <h3>{Item.title}</h3>
      </div>
      <div className="NewsCardDetails">
        <span className="NewsCardSource">{Item.source.name}</span>
        <span className="NewsCardTime">{Item.publishedAt}</span>
      </div>
      <div className="NewsCardDescription">
        <p>
          {str}
          <Link to={Item.url} className="link">
            <span>Read more</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
