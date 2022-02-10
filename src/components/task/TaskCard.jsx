import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskAddInput } from './TaskAddInput';
import { TaskCardTitle } from './TaskCardTitle';
import { Tasks } from './Tasks';

export const TaskCard = (props) => {
  const { taskCardsList, setTaskCardsList, taskCard, index } = props;
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);

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
