import { Dispatch, memo, SetStateAction, VFC } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { Task } from './Task';
import { taskListProps } from './TaskCard';

interface Props {
  taskList: taskListProps[];
  setTaskList: Dispatch<SetStateAction<taskListProps[]>>;
}

// タスクを並び替える
const reorder = (
  taskList: taskListProps[],
  startIndex: number,
  endindex: number | undefined,
) => {
  if (endindex !== undefined) {
    const remove = taskList.splice(startIndex, 1);
    taskList.splice(endindex, 0, remove[0]);
  }
};

export const Tasks: VFC<Props> = memo((props) => {
  const { taskList, setTaskList } = props;
  const handleDragEnd = (result: DropResult) => {
    reorder(taskList, result.source.index, result.destination?.index);
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
