import { PICK } from "../type/DressingRoomType";

export const pickItem = (srcData) => {
  return {
    type: PICK,
    srcData,
  };
};
