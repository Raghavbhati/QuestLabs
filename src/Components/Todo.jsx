import { useState } from "react";
import TodoColumn from "./TodoColumn";
import { DragDropContext } from "react-beautiful-dnd";


export const Todo = () => {
  const [newtodo, setNewtod] = useState([]);

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "delectus aut autem",
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
    },
  ]);
  const [inProgress, setInProgress] = useState([]);
  const [inReview, setInReview] = useState([]);
  const [completed, setCompleted] = useState([]);

  return (
    <div className="w-full h-full bg-primary">
      <div className="w-10/12 m-auto py-10">
        <DragDropContext>
          <div className="grid grid-cols-4 gap-3">
            <TodoColumn title={"To Do"} tasks={todo} id={"1"} />
            <TodoColumn title={"In Progress"} tasks={inProgress} id={"2"} />
            <TodoColumn title={"Review"} tasks={inReview} id={"3"} />
            <TodoColumn title={"Done"} tasks={completed} id={"4"} />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};
