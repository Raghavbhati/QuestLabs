import { Draggable } from "react-beautiful-dnd";

const Taskcard = ({ task, index }) => {
  const colors = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided, snapshot) => (
        <div
          className="bg-white py-4 px-3 rounded-lg shadow-lg"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div key={index}>
            <h1>{task.title}</h1>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Taskcard;
