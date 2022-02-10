import { memo, useState, VFC } from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

interface taskCardsListProps {
  id: string;
  draggableId: string;
}

//タスクを並び替える
const reorder = (
  taskCardsList: taskCardsListProps[],
  startIndex: number,
  endindex: number,
) => {
  const remove = taskCardsList.splice(startIndex, 1);
  taskCardsList.splice(endindex, 0, remove[0]);
};

export const TaskCards: VFC = memo(() => {
  const [taskCardsList, setTaskCardsList] = useState<taskCardsListProps[]>([
    {
      id: '0',
      draggableId: 'item0',
    },
  ]);
  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index);
    setTaskCardsList(taskCardsList);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (
          <div
            className='taskCardArea'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});
