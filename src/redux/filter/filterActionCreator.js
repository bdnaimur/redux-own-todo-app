import { CHANGEDSTATUS, COLORADDED, COLORTOGGLED } from "./filterTypes";

export const colorToggleAction = (color, action) => {
  return {
    type: COLORTOGGLED,
    payload: {
      color,
      actionType: action
    }
  };
};

export const colorAdded = (color) => {
  return {
    type: COLORADDED,
    payload: color,
  };
};

export const changedStatus = (status) => {
  return {
    type: CHANGEDSTATUS,
    payload: status,
  };
};
