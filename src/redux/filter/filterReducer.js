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
      if (action.payload.actionType == 'added') {
        console.log('from added');
        return {
          ...state,
          colors: [...state.colors, action.payload.color],
        };
      }else {
        console.log('from removed')
        return {
          ...state,
          colors: state.colors.filter(color =>  color !== action.payload.color),
        };
      }
      
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
