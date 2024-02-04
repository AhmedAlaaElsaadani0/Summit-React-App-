import React from 'react'
import "./AnimateBars.css";
export default function AnimatBars() {
    return (
        <div id="bars" className="bars">
          <div/>
      <div style={{ animationDelay: "0.025s" }} />
      <div style={{ animationDelay: "0.05s" }} />
      <div style={{ animationDelay: "0.075s" }} />
      <div style={{ animationDelay: "0.1s" }} />
        </div>
      );
}


  