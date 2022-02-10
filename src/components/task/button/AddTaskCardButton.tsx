import { Dispatch, memo, SetStateAction, VFC } from 'react';
import { v4 as uuid } from 'uuid';

interface taskCardsListProps {
  id: string;
  draggableId: string;
}

interface Props {
  taskCardsList: taskCardsListProps[];
  setTaskCardsList: Dispatch<SetStateAction<taskCardsListProps[]>>;
}

export const AddTaskCardButton: VFC<Props> = memo((props) => {
  const { taskCardsList, setTaskCardsList } = props;
  const addTaskCard = () => {
    const taskCardId = uuid();
    setTaskCardsList([
      ...taskCardsList,
      { id: taskCardId, draggableId: `item1${taskCardId}` },
    ]);
  };
  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={addTaskCard}>
        +
      </button>
    </div>
  );
});
AddTaskCardButton.displayName = 'UserDetailModal';
