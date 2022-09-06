import React from "react";

export default function BannerDressingRoom() {
  return (
    <div>
      <div className="card">
        <div className="text-center">
          <img
            src={require("../assets/images/cybersoft.png")}
            alt="Card image"
          />
        </div>
        <div className="card-body">
          <h4 className="card-title text-center">
            CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến -
            Virtual Dressing Room
          </h4>
        </div>
      </div>
    </div>
  );
}
