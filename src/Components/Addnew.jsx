import { useState } from "react";

const Addnew = ({ addnewTodo, data }) => {
  const [nextId, setNextId] = useState(10);
  const [addtask, setAddtask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddNewTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: nextId,
      title: newTaskTitle,
    };

    setNextId((pre) => pre + 1);
    addnewTodo((prevTasks) => [...prevTasks, newTask]);
    setNewTaskTitle("");
    setAddtask(false);
  };

  return (
    <div className="my-3 p-3 bg-gray-200 rounded-lg">
      <button
        className="w-full bg-dark text-white py-1.5 hover:bg-primary font-semibold"
        onClick={() => setAddtask(!addtask)}
      >
        Add new
      </button>
      {addtask && (
        <div className="p-3 bg-white mt-2">
          <form onSubmit={handleAddNewTask}>
            <input
              className="w-full py-1.5 focus:outline-none rounded border border-gray-400 pl-2"
              type="text"
              value={newTaskTitle}
              placeholder="Enter task title"
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <button className="w-full bg-primary hover:bg-dark py-1 my-1 text-white font-medium text-sm" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Addnew;
