import React from "react";
import BannerImg from "../../img/bannerImg.jpg";
import "./style.css";

function ImgBanner({size, scroll}) {

  const pageSize = size.height*.8

  const layer = {
    zIndex: scroll > pageSize && scroll < pageSize*3.5 ? `1` : `-1`

  }
// console.log(scroll)
// console.log(pageSize*4)
    return <div id="ImgBanner" style={layer}>
      
      <div className="bannerImgC">
      <img className="bannerImg" src={BannerImg}/>
      </div>
    </div>;
  }
  
  export default ImgBanner;
  