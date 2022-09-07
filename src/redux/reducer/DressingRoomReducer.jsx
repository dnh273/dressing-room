import { PICK } from "../type/DressingRoomType";

const initialState = {
  Item: {
    hairstyle: {
      id: "hairstyle_1",
      type: "hairstyle",
      name: "Hairstyle 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/hairstyle/hairstyle1_show.jpg",
      imgSrc_png: "../assets/images/hairstyle/hairstyle1.png",
    },
    necklaces: {
      id: "necklace_1",
      type: "necklaces",
      name: "Necklace 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/necklaces/necklace1_show.jpg",
      imgSrc_png: "../assets/images/necklaces/necklace1.png",
    },
    topclothes: {
      id: "topcloth_1",
      type: "topclothes",
      name: "Top Cloth 1",
      imgSrc_jpg: "../assets/images/clothes/topcloth1_show.jpg",
      imgSrc_png: "../assets/images/clothes/topcloth1.png",
    },
    botclothes: {
      id: "botcloth_1",
      type: "botclothes",
      name: "Bot Cloth 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/botcloth1_show.jpg",
      imgSrc_png: "../assets/images/clothes/botcloth1.png",
    },
    handbags: {
      id: "handbag_1",
      type: "handbags",
      name: "Handbag 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/handbags/handbag1_show.jpg",
      imgSrc_png: "../assets/images/handbags/handbag1.png",
    },
    shoes: {
      id: "shoes_1",
      type: "shoes",
      name: "Shoes 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/shoes/shoes1_show.jpg",
      imgSrc_png: "../assets/images/shoes/shoes1.png",
    },
    background: {
      id: "background_1",
      type: "background",
      name: "Background 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/background/background1_show.jpg",
      imgSrc_png: "../assets/images/background/background1.jpg",
    },
  },
  SelectItem: {},
};

const DressingRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case PICK: {
      let newItem = { ...state.Item };
      let newSelectItem = { ...state.SelectItem };

      newSelectItem = action.srcData.imgSrc_png;
      switch (action.srcData.type) {
        case "topclothes": {
          newItem.topclothes = action.srcData;
          break;
        }
        case "botclothes": {
          newItem.botclothes = action.srcData;
          break;
        }
        case "shoes": {
          newItem.shoes = action.srcData;
          break;
        }
        case "handbags": {
          newItem.handbags = action.srcData;
          break;
        }
        case "necklaces": {
          newItem.necklaces = action.srcData;
          break;
        }
        case "hairstyle": {
          newItem.hairstyle = action.srcData;
          break;
        }
        case "background": {
          newItem.background = action.srcData;
          break;
        }
      }
      state.SelectItem = newSelectItem;
      state.Item = newItem;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default DressingRoomReducer;
