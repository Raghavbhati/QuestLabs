import { useState } from "react";
import TodoColumn from "./TodoColumn";
import { DragDropContext } from "react-beautiful-dnd";


export const Todo = () => {
  const ID = 10;
  const [newtodo, setNewtod] = useState([]);

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Task First",
    },
    {
      id: 2,
      title: "Task Second",
    },
  ]);
  const [inProgress, setInProgress] = useState([{
    id: 3,
    title: "Task 3",
  },
  {
    id: 4,
    title: "Task 4",
  },]);
  const [inReview, setInReview] = useState([{
    id: 5,
    title: "Task 5",
  },
  {
    id: 6,
    title: "Task 6",
  },]);
  const [completed, setCompleted] = useState([]);


  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination || source.droppableId === destination.droppableId) return;

    deletePreviousState(source.droppableId, draggableId);
    const task = findItemById(draggableId, [...todo, ...inProgress, ...inReview, ...completed]);
    setNewState(destination.droppableId, task);
  };

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
     return array.filter((item) => item.id != id);
  } 

  function deletePreviousState(sourceDroppableId, taskId) {
    switch (sourceDroppableId) {
      case "1":
        setTodo(removeItemById(taskId, todo));
        break;
      case "2":
        setInProgress(removeItemById(taskId, inProgress));
        break;
      case "3":
        setInReview(removeItemById(taskId, inReview));
        break;
      case "4":
        setCompleted(removeItemById(taskId, completed));
        break;
    }
  }

  function setNewState(destinationDroppableId, task) {
    let updatedTask;
    switch (destinationDroppableId) {
      case "1":
        updatedTask = { ...task, completed: false };
        setTodo([updatedTask, ...todo]);
        break;
      case "2":
        updatedTask = { ...task, completed: false };
        setInProgress([updatedTask, ...inProgress]);
        break;
      case "3":
        updatedTask = { ...task, completed: false };
        setInReview([updatedTask, ...inReview]);
        break;
      case "4":
        updatedTask = { ...task, completed: true };
        setCompleted([updatedTask, ...completed]);
        break;
    }
  }


  return (
    <div className="w-full h-full bg-primary">
      <div className="w-10/12 m-auto py-10">
        <DragDropContext onDragEnd={handleDragEnd}>
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
