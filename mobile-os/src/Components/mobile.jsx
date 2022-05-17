import React from "react";
import "../Styles/mobile.css"

const mobile = () => {
  const operating = ["Android", "BlackBerry", "IPhone", "Windows-Phone"];
  const manufacture = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div>
      <div className="mobile">
        <div className="head">
          <h1>Mobile Operating System</h1>
        </div>
        <div className="table">
          {operating.map((e) => {
            return <Operate os={e} />;
          })}
        </div>
        <div className="head">
          <h1>Mobile Manufactures</h1>
        </div>
        <div className="table">
          {manufacture.map((e) => {
            return <Operate os={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

function Operate(props) {
  return <li>{props.os}</li>;
}

export default mobile;
