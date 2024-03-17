import { Draggable } from "react-beautiful-dnd";

const Taskcard = ({ task, id, index, classes, isComment, commentNo }) => {
  console.log(task);
  return (
      <Draggable draggableId={id} index={id}>
        {(provided, snapshot) => (
          <div
          className="bg-white py-4 px-3 rounded-lg"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div key={id}>
              <h1>{task.title}</h1>
            </div>
          </div>
        )}
      </Draggable>
  );
};

export default Taskcard;
