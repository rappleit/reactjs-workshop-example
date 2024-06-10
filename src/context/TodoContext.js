import React, { createContext, useState } from 'react';

const TodoContext = createContext({
  tasks: [],
  setTasks: () => {}
});

function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const value = { tasks, setTasks };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };