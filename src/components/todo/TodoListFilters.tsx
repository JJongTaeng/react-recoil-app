import React from 'react';
import {useRecoilState} from "recoil";
import {TodoListFilterState, todoListFilterState} from "../../state/state";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter: any = ({target: {value}}: {target: {value: TodoListFilterState}}) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
export default TodoListFilters;