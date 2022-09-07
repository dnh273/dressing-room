import React from "react";
import { useDispatch } from "react-redux";
import { pickItem } from "../redux/actions/DressingRoomAction";

export default function Item(props) {
  const { srcData } = props;

  const dispatch = useDispatch();

  return (
    <>
      <img src={srcData.imgSrc_jpg} alt={srcData.imgSrc_jpg} />

      <h4>
        <b>{srcData.name}</b>
      </h4>
      <button
        onClick={() => {
          dispatch(pickItem(srcData));
        }}
      >
        Thử đồ
      </button>
    </>
  );
}
