import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  memo,
  SetStateAction,
  VFC,
} from 'react';
import { v4 as uuid } from 'uuid';

import { taskListProps } from './TaskCard';

interface Props {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  taskList: taskListProps[];
  setTaskList: Dispatch<SetStateAction<taskListProps[]>>;
}

export const TaskAddInput: VFC<Props> = memo((props) => {
  const { inputText, setInputText, setTaskList, taskList } = props;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === '') return;
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    setInputText('');
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='add a task'
          className='taskAddInput'
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
});
TaskAddInput.displayName = 'UserDetailModal';
