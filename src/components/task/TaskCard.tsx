import { Dispatch, SetStateAction, useState, VFC } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskAddInput } from './TaskAddInput';
import { taskCardsListProps } from './TaskCards';
import { TaskCardTitle } from './TaskCardTitle';
import { Tasks } from './Tasks';

// Todo1列の情報
export interface taskListProps {
  id: string;
  draggableId: string;
  text: string;
}

interface Props {
  taskCardsList: taskCardsListProps[];
  setTaskCardsList: Dispatch<SetStateAction<taskCardsListProps[]>>;
  taskCard: taskCardsListProps;
  index: number;
}

export const TaskCard: VFC<Props> = (props) => {
  const { taskCardsList, setTaskCardsList, taskCard, index } = props;
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState<taskListProps[]>([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className='taskCard'
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className='taskCardTitleAndDeleteButtonArea'
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};
TaskCard.displayName = 'UserDetailModal';
