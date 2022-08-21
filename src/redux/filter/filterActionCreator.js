import { CHANGEDSTATUS, COLORADDED, COLORTOGGLED } from "./filterTypes";

export const colorToggleAction = (color) => {
  return {
    type: COLORTOGGLED,
    payload: color,
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
