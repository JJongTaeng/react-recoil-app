import React, {useState} from 'react';
import {useSetRecoilState} from "recoil";
import {todoListState, TodoListStateProps} from "../state/state";

let id = 0;
function getId() {
  return id++;
}

const TodoItemCreator = () => {

  const [inputValue, setInputValue ] = useState('');
  const setTodoList = useSetRecoilState<TodoListStateProps[]>(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      }
    ]);

    setInputValue('');
  }

  const onChange = ({ target: { value }}: {target: { value: string }}) => {
    setInputValue(value);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
