import React from 'react';
import './App.css';
import TodoList from "./components/todo/TodoList";
import Nasa from "./components/nasa/Nasa";

function App() {
  return (
    <div>
      <TodoList />
      <React.Suspense fallback={'로딩 중...'}>
        <Nasa />
      </React.Suspense>
    </div>
  );
}

export default App;
