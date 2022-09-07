import React from "react";
import { useSelector } from "react-redux";
import "../DressingRoom/DressingRoom.css";
import BannerDressingRoom from "./BannerDressingRoom";
import ChoosenItem from "./ChoosenItem";
import Modal from "./Modal";
import { useSpring, animated } from "react-spring";

export default function DressingRoom() {
  const ImgAnimate = useSelector(
    (state) => state.DressingRoomReducer.SelectItem
  );

  console.log(ImgAnimate);
  const [propsAnim, start] = useSpring(() => ({
    to: async (next) => {
      await next({ opacity: 0.8, display: "block", left: "50%" });
      await next({ opacity: 0.05, display: "block", left: "70%" });
    },
    from: { opacity: 0, display: "none", left: "0" },
    config: { duration: 300 },
  }));

  start({
    to: async (next) => {
      await next({ opacity: 0.8, display: "block", left: "50%" });
      await next({ opacity: 0.1, display: "block", left: "75%" });
      await next({ opacity: 0.05, display: "none", left: "75%" });
    },
    from: { opacity: 0, display: "none", left: "0" },
  });

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
          <animated.img
            src={ImgAnimate}
            alt=""
            style={{
              position: "absolute",
              left: propsAnim.left,
              zIndex: 10,
              top: propsAnim.top,
              opacity: propsAnim.opacity,
              width: "300px",
              display: propsAnim.display,
            }}
          />
          <div className="col-md-8">
            <ChoosenItem></ChoosenItem>
          </div>
          <div className="col-md-4">
            <Modal></Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
