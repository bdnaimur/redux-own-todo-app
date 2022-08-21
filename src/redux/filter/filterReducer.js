import { CHANGEDSTATUS, COLORADDED, COLORTOGGLED } from "./filterTypes";

const initialState = {
  colors: [],
  status: "All",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLORADDED:
      return {
        ...state,
        colors: [...state.colors, action.payload],
      };
    case COLORTOGGLED:
      return {
        ...state,
        colors: [...state.colors, action.payload],
      };
    case CHANGEDSTATUS:
      //   const { status } = action.payload;
      return {
        ...state,
        status: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default filterReducer;
