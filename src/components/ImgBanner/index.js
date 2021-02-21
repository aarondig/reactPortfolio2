import React from "react";
import BannerImg from "../../img/bannerImg.jpg";
import "./style.css";

function ImgBanner({size, scroll}) {

  const pageSize = size.height*.8;

  const layer = {
    zIndex: scroll > pageSize && scroll < pageSize * 3.5 ? `1` : `-1`

  }
// console.log(scroll)
// console.log(pageSize*4)
    return <div id="ImgBanner" >
      {/* <div className="vertical">
        <div className="overlayBox">
          <h1>Explore</h1>
        </div>
      </div> */}
      <div className="bannerImgC" style={layer}>
      <img className="bannerImg" src={BannerImg}/>
      </div>
    </div>;
  }
  
  export default ImgBanner;
  