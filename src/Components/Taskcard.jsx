import { Draggable } from "react-beautiful-dnd";

const Taskcard = ({ task,index, classes, isComment, commentNo }) => {
  return (
      <Draggable draggableId={String(task.id)} index={index}>
        {(provided, snapshot) => (
          <div
          className="bg-white py-4 px-3 rounded-lg"
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
