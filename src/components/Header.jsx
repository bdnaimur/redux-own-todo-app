import React from "react";
import { useState } from "react";
import doubleTick from "../images/double-tick.png";
import notes from "../images/notes.png";
import plus from "../images/plus.png";
import { useDispatch } from "react-redux";
import {
  addTask,
  clearAllTask,
  completedAllTask,
} from "../redux/addTask/actionCreator";

export default function Header() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addTask(task));
      setTask("");
    }
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleallComplete = () => {
    dispatch(completedAllTask());
  };
  const handleClearAll = () => {
    dispatch(clearAllTask());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notes} class="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={task}
          onChange={handleChange}
        />
        <button
          type="submit"
          class={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul class="flex justify-between my-4 text-xs text-gray-500">
        <li onClick={handleallComplete} class="flex space-x-1 cursor-pointer">
          <img
            class="w-4 h-4"
            src={doubleTick}
            // src="./images/double-tick.png"
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClearAll} class="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
}
