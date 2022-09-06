import React from "react";
import Data from "../Data/Data.json";
import Item from "./Item";

const renderNavPills = () => {
  return Data.navPills.map((item, index) => {
    return (
      <li className="nav-item" key={index}>
        <a
          className="nav-link  btn-default"
          data-toggle="pill"
          href={`#${item.tabName}`}
        >
          {item.showName}
        </a>
      </li>
    );
  });
};

const renderChoosenItem = (typeItem) => {
  return Data.tabPanes
    .filter((item) => item.type === typeItem)
    .map((item, index) => {
      return (
        <div className="col-md-3" key={index}>
          <div className="card text-cent">
            <Item srcData={item}></Item>
          </div>
        </div>
      );
    });
};

export default function ChoosenItem(props) {
  return (
    <div>
      <ul className="nav nav-pills">{renderNavPills()}</ul>
      <div className="well">
        {/* Tab panes */}
        <div className="tab-content">
          <div className="tab-pane container active" id="tabTopClothes">
            <div className="container">
              <div className="row">{renderChoosenItem("topclothes")}</div>
            </div>
          </div>
          <div className="tab-pane container fade" id="tabBotClothes">
            <div className="container">
              <div className="row">{renderChoosenItem("botclothes")}</div>
            </div>
          </div>
          <div className="tab-pane container fade" id="tabShoes">
            <div className="container">
              <div className="row">{renderChoosenItem("shoes")}</div>
            </div>
          </div>
          <div className="tab-pane container fade" id="tabHandBags">
            <div className="container">
              <div className="row">{renderChoosenItem("handbags")}</div>
            </div>
          </div>
          <div className="tab-pane container fade" id="tabNecklaces">
            <div className="container">
              <div className="row">{renderChoosenItem("necklaces")}</div>
            </div>
          </div>
          <div className="tab-pane container fade" id="tabHairStyle">
            <div className="container">
              <div className="row">{renderChoosenItem("hairstyle")}</div>
            </div>
          </div>
          <div className="tab-pane container fade" id="tabBackground">
            <div className="container">
              <div className="row">{renderChoosenItem("background")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
