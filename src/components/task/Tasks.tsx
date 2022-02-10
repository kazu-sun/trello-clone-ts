import { memo, VFC } from 'react';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import { Task } from './Task';

interface taskCardsListProps {
  id: string;
  draggableId: string;
}

interface Props {
  taskList: taskCardsListProps[];
  setTaskList: taskCardsListProps[];
}

//タスクを並び替える
const reorder = (
  taskList: taskCardsListProps[],
  startIndex: number,
  endindex: number,
) => {
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(endindex, 0, remove[0]);
};

export const Tasks: VFC<Props> = memo((props) => {
  const { taskList, setTaskList } = props;
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});
