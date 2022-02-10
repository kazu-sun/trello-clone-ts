import { ChangeEvent, FocusEvent, FormEvent, memo, useState, VFC } from 'react';

export const TaskCardTitle: VFC = memo(() => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState('Today');

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className='taskCardTitleInputArea'>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className='taskCardTitleInput'
            autoFocus
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength={10}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
});
TaskCardTitle.displayName = 'UserDetailModal';
