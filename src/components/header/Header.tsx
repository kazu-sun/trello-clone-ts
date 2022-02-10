import { memo, VFC } from 'react';

export const Header: VFC = memo(() => {
  return (
    <div>
      <header>
        <h1>ToDo</h1>
      </header>
    </div>
  );
});
