import { VFC } from 'react';

import { Header } from './components/header/Header';
import { TaskCards } from './components/task/TaskCards';

export const App: VFC = () => {
  return (
    <div className='app'>
      <Header />
      <TaskCards />
    </div>
  );
};

App.displayName = 'UserDetailModal';
