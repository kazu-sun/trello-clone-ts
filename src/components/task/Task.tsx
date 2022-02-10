import { VFC } from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface taskListProps {
  id: string;
  draggableId: string;
  text: string;
}

interface Props {
  task: taskListProps;
  taskList: taskListProps[];
  setTaskList: taskListProps[];
  index: number;
}

export const Task: VFC<Props> = (props) => {
  const { task, taskList, setTaskList, index } = props;
  const handleDelete = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className='taskBox'
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className='taskText'>{task.text}</p>
          <button
            className='taskTrashButton'
            onClick={() => handleDelete(task.id)}
          >
            <i className='fa-solid fa-trash'></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};
