import { taskListProps } from '../components/task/TaskCard';
import { taskCardsListProps } from '../components/task/TaskCards';

export const useTaskReOrder = () => {
  const reOrder = (
    list: taskListProps[] | taskCardsListProps[],
    startIndex: number,
    endIndex: number | undefined,
  ) => {
    if (endIndex !== undefined) {
      const remove = list.splice(startIndex, 1);
      list.splice(endIndex, 0, remove[0]);
    }
  };
  return { reOrder };
};
