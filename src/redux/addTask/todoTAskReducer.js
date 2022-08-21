import {
  CANCELLED,
  CLEAREDALL,
  COLORSELECTED,
  COMPLETEDALL,
  COMPLETEDONE,
  TASKADDED,
  TOGGLETASK,
} from "./actionTypes";

const initialState = [
  {
    id: 0,
    task: "React",
    complete: false,
  },
];

const maxIdCreator = (todos) => {
  const maxID = todos.reduce((max, todo) => Math.max(max, todo.id), -1);
  return maxID + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKADDED:
      return [
        ...state,
        {
          id: maxIdCreator(state),
          task: action.payload,
          complete: false,
        },
      ];

    case COMPLETEDONE:
      const updatedTask = state.map((todo) => {
        if (todo.id == action.payload) {
          return {
            ...todo,
            complete: true,
          };
        }
        return {
          ...todo,
        };
      });
      return [...updatedTask];

    case TOGGLETASK:
      const toggleTask = state.map((todo) => {
        if (todo.id == action.payload) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return {
          ...todo,
        };
      });
      return [...toggleTask];

    case COLORSELECTED:
      const { id, color } = action.payload;
      return state.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            color: color,
          };
        }
        return {
          ...todo,
        };
      });

    case COMPLETEDALL:
      const completedAll = state.map((todo) => {
        return {
          ...todo,
          complete: true,
        };
      });
      return [...completedAll];

    case CLEAREDALL:
      return state.filter((todo) => !todo.complete);
    //   return [...clearedCompleted];

    case CANCELLED:
      const cancelOneTask = state.filter((todo) => todo.id == action.payload);
      return [...cancelOneTask];

    default:
      return state;
  }
};

export default todoReducer;
