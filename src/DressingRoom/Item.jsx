import React from "react";
import { useDispatch } from "react-redux";

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
          dispatch({
            type: "PICK",
            srcData,
          });
        }}
      >
        Thử đồ
      </button>
    </>
  );
}
