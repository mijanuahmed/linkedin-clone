import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import { FiberManualRecord } from "@material-ui/icons";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Mijan Ahmed is Back", "Top news - 9099 readers")}
      {newsArticle("Tesla hits new highs", "Cars & autos - 300 readers")}
      {newsArticle("Bitcoin breaks $22k", "Crypto - 8000 readers")}
      {newsArticle("Is Redux too good?", "Code - 1023 readers")}
      {newsArticle("Mijan is Awesome!?", "Top news - 6703 readers")}
    </div>
  );
};

export default Widgets;
