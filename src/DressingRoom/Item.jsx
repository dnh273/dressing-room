import React from "react";

export default function Item(props) {
  const { srcData } = props;

  console.log(srcData.imgSrc_jpg);

  return (
    <>
      <img src={require(srcData.imgSrc_jpg)} alt={srcData.imgSrc_jpg} />

      <h4>
        <b>{srcData.name}</b>
      </h4>
      <button>Thử đồ</button>
    </>
  );
}
