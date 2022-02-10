import { ChangeEvent } from 'react';
import { FormEvent, memo, VFC } from 'react';
import { v4 as uuid } from 'uuid';

interface taskListProps {
  id: string;
  draggableId: string;
  text: string;
}

interface Props {
  inputText: string;
  setInputText: string;
  setTaskList: taskListProps[];
  taskList: taskListProps[];
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
