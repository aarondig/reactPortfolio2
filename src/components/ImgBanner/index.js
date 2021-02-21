import React from "react";
import BannerImg from "../../img/bannerImg.jpg";
import "./style.css";

function ImgBanner({size, scroll}) {


  const layer = {
    zIndex: scroll > size.height*.8 ? `1` : `0`
  }

    return <div id="ImgBanner" style={layer}>
      
      <div className="bannerImgC">
      <img className="bannerImg" src={BannerImg}/>
      </div>
      


    </div>;
  }
  
  export default ImgBanner;
  