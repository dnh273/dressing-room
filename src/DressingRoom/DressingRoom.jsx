import React from "react";
import "../DressingRoom/DressingRoom.css";
import BannerDressingRoom from "./BannerDressingRoom";
import ChoosenItem from "./ChoosenItem";

export default function DressingRoom() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <BannerDressingRoom></BannerDressingRoom>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <ChoosenItem></ChoosenItem>
          </div>
          <div className="col-md-4">
            <div className="contain">
              <div>
                <div className="body" />
                <div className="model" />
                <div className="hairstyle" />
                <div className="necklace" />
                <div className="bikinitop" />
                <div className="bikinibottom" />
                <div className="handbag" />
                <div className="feet" />
                <div className="background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
