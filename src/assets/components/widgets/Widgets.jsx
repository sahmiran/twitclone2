import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Widgets.css";
import Widgetsnews from "./Widgetsnews";
import WidgetsFollow from "./WidgetsFollow";
function Widgets({ posts }) {
  const newsItems = [
    { title: "#konu başlığı 1", content: "kaç post var konuyla ilgili 1" },
    { title: "#konu başlığı 2", content: "kaç post var konuyla ilgili 2" },
    { title: "#konu başlığı 3", content: "kaç post var konuyla ilgili 3" },
    { title: "#konu başlığı 4", content: "kaç post var konuyla ilgili 4" },
    { title: "#konu başlığı 5", content: "kaç post var konuyla ilgili 5" },
  ];
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input className="widgets_inputText" type="text" placeholder="Search" />
      </div>
      <div className="widgets_widgetContainer">
        <div>
          <h2>Trends For you </h2>
        </div>
        <div className="widgetnewsContainer">
          {newsItems.map((item, index) => (
            <Widgetsnews
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <div className="followSuggest">
        <WidgetsFollow posts={posts} />
      </div>
    </div>
  );
}
export default Widgets;
