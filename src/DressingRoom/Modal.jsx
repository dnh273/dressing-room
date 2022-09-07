import React from "react";
import { useSelector } from "react-redux";

export default function Modal() {
  const ItemImg = useSelector((state) => state.DressingRoomReducer.Item);
  return (
    <>
      <div className="contain">
        <div>
          <div className="body" />
          <div className="model" />
          <div>
            <div
              className="hairstyle"
              style={{
                width: "1000px",
                height: "1000px",
                background: `url(${ItemImg.hairstyle.imgSrc_png})`,
                position: "absolute",
                top: "-75%",
                right: "-57%",
                transform: "scale(0.15)",
                zIndex: 4,
              }}
            />
            <div
              className="necklace"
              style={{
                width: "500px",
                height: "1000px",
                background: `url(${ItemImg.necklaces.imgSrc_png})`,
                position: "absolute",
                bottom: "-40%",
                right: "-3.5%",
                transform: "scale(0.5)",
                zIndex: 4,
              }}
            />
            <div
              className="bikinitop"
              style={{
                width: "500px",
                height: "500px",
                background: `url(${ItemImg.topclothes.imgSrc_png})`,
                position: "absolute",
                top: "-9%",
                left: "-5%",
                zIndex: 3,
                transform: "scale(0.5)",
              }}
            />
            <div
              className="bikinibottom"
              style={{
                width: "500px",
                height: "1000px",
                background: `url(${ItemImg.botclothes.imgSrc_png})`,
                position: "absolute",
                top: "-30%",
                left: "-5%",
                zIndex: 2,
                transform: "scale(0.5)",
              }}
            />
            <div
              className="handbag"
              style={{
                width: "500px",
                height: "1000px",
                background: `url(${ItemImg.handbags.imgSrc_png})`,
                position: "absolute",
                bottom: "-40%",
                right: "-3.5%",
                transform: "scale(0.5)",
                zIndex: 4,
              }}
            />
            <div
              className="feet"
              style={{
                width: "500px",
                height: "1000px",
                background: `url(${ItemImg.shoes.imgSrc_png})`,
                position: "absolute",
                bottom: "-37%",
                right: "-3.5%",
                transform: "scale(0.5)",
                zIndex: 1,
              }}
            />
            <div
              className="background"
              style={{
                backgroundImage: `url(${ItemImg.background.imgSrc_png})`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
