import {
  CANCELLED,
  CLEAREDALL,
  COLORSELECTED,
  COMPLETEDALL,
  COMPLETEDONE,
  TASKADDED,
  TOGGLETASK,
} from "./actionTypes";

export const addTask = (text) => {
  return {
    type: TASKADDED,
    payload: text,
  };
};

export const completedAllTask = () => {
  return {
    type: COMPLETEDALL,
  };
};

export const clearAllTask = () => {
  return {
    type: CLEAREDALL,
  };
};

export const completeOneTask = (taskID) => {
  return {
    type: COMPLETEDONE,
    payload: taskID,
  };
};

export const toggleTask = (taskID) => {
  return {
    type: TOGGLETASK,
    payload: taskID,
  };
};

export const cancellTask = (taskId) => {
  return {
    type: CANCELLED,
    payload: taskId,
  };
};

export const colorSelected = (taskID, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      id: taskID,
      color: color,
    },
  };
};
