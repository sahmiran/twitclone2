import React from "react";
import "./Widgetsnews.css";
function Widgetsnews(props) {
  const { title, content } = props;

  return (
    <div className="widgetsnews">
      <div className="icerikler">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Widgetsnews;
