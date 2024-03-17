import { Droppable } from "react-beautiful-dnd";
import Taskcard from "./Taskcard";

const TodoColumn = (props) => {
  const { title, tasks, id } = props;
  return (
    <div>
      <h1 className="font-semibold text-xl pb-2 text-dark">{title}</h1>
      <div>
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                backgroundColor: snapshot.isDraggingOver
                  ? "lightblue"
                  : "lightgrey",
              }}
            >
                <div className="flex flex-col gap-2">
                {tasks.map((task, index) => (
                   <Taskcard key={index} task={task} index={index} />
                ))}
              {provided.placeholder}
                </div>
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default TodoColumn;
