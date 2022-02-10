import { Dispatch, memo, SetStateAction, VFC } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { useTaskReOrder } from '../../hooks/useTaskReOrder';
import { Task } from './Task';
import { taskListProps } from './TaskCard';

interface Props {
  taskList: taskListProps[];
  setTaskList: Dispatch<SetStateAction<taskListProps[]>>;
}

export const Tasks: VFC<Props> = memo((props) => {
  const { taskList, setTaskList } = props;
  const { reOrder } = useTaskReOrder();
  const handleDragEnd = (result: DropResult) => {
    reOrder(taskList, result.source.index, result.destination?.index);
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

Tasks.displayName = 'UserDetailModal';
