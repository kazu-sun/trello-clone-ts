import { Dispatch, memo, SetStateAction, VFC } from 'react';

import { taskCardsListProps } from '../TaskCards';

interface Props {
  taskCardsList: taskCardsListProps[];
  setTaskCardsList: Dispatch<SetStateAction<taskCardsListProps[]>>;
  taskCard: taskCardsListProps;
}

export const TaskCardDeleteButton: VFC<Props> = memo((props) => {
  const { taskCardsList, setTaskCardsList, taskCard } = props;
  const taskCardDeleteButton = (id: string) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className='taskCardDeleteButton'
        onClick={() => {
          taskCardDeleteButton(taskCard.id);
        }}
      >
        <i className='fa-solid fa-circle-xmark'></i>
      </button>
    </div>
  );
});
TaskCardDeleteButton.displayName = 'UserDetailModal';
