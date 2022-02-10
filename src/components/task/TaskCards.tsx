import { memo, useState, VFC } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { useTaskReOrder } from '../../hooks/useTaskReOrder';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { TaskCard } from './TaskCard';

// Todo1列の情報
export interface taskCardsListProps {
  id: string;
  draggableId: string;
}

export const TaskCards: VFC = memo(() => {
  const [taskCardsList, setTaskCardsList] = useState<taskCardsListProps[]>([
    {
      id: '0',
      draggableId: 'item0',
    },
  ]);
  const { reOrder } = useTaskReOrder();

  const handleDragEnd = (result: DropResult) => {
    reOrder(taskCardsList, result.source.index, result.destination?.index);
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
TaskCards.displayName = 'UserDetailModal';
