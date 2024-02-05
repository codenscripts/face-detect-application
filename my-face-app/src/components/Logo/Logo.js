import React from "react";
import brain from './aibrain.png';
import './Logo.css';

const Logo =() => {
  return (
    <div className="ma4 mt0">
      <div className="demo">
        <div className="box"> <img alt="brain logo" src={brain}></img>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="box-contents"></div>
        </div>
      </div>
    </div>
  );
}

export default Logo;