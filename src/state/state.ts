import {atom, GetRecoilValue, selector} from "recoil";

export interface TodoListStateProps {
  id: number;
  text: string;
  isComplete: boolean;
}

export enum TodoListFilterState {
  SHOW_ALL = 'Show All',
  SHOW_COMPLETED = 'Show Completed',
  SHOW_UNCOMPLETED = 'Show Uncompleted',
}

export const todoListState = atom<TodoListStateProps[] | []>({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom<TodoListFilterState>({
  key: 'todoListFilterState',
  default: TodoListFilterState.SHOW_ALL,
});

export const filteredTodoListState = selector<TodoListStateProps[]>({
  key: 'filteredTodoListState',
  get: ({get}: {get: GetRecoilValue}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case TodoListFilterState.SHOW_COMPLETED:
        return list.filter((item: TodoListStateProps) => item.isComplete);
      case TodoListFilterState.SHOW_UNCOMPLETED:
        return list.filter((item: TodoListStateProps) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

