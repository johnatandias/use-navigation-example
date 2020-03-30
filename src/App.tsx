import React, { useState, useEffect, useRef } from 'react';
import { Header, Input, Softkey, Todo, Todos } from './components';
import useNavigation from 'use-navigation';

const initList: Todo[] = [
  { name: "Learn React", completed: false },
  { name: "Learn Angular", completed: false },
  { name: "Learn Node", completed: false },
  { name: "Learn SASS", completed: false },
  { name: "Learn CSS", completed: false }
];

const App = () => {
  const [todos, setTodo] = useState<Todo[]>(initList);
  const [value, setInputValue] = useState<string>('');
  const [currentIndex, selectPrevious] = useNavigation();
  const navigationIndex = useRef<number>(0);
  const inputValue = useRef<string>('');

  useEffect(() => {
    navigationIndex.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    inputValue.current = value;
  }, [value]);

  const onKeyRight = () => {
    const isInput = navigationIndex.current === 0;
    if (isInput) return;

    selectPrevious();
    const todoIndex = navigationIndex.current - 1;

    setTodo(prevState => {
      const newList = [...prevState];
      newList.splice(todoIndex, 1);
      return newList;
    });
  };

  const onKeyCenter = () => {
    const isATask = navigationIndex.current > 0;
    if (isATask) {
      setTodo(prevState => {
        const currentList = [...prevState];
        const todoIndex = navigationIndex.current - 1
        currentList[todoIndex].completed = !currentList[todoIndex].completed;
        return currentList;
      });

      return;
    }

    if (inputValue.current.length) {
      const newTodo = { name: inputValue.current, completed: false };
      setTodo(prevState => [...prevState, newTodo]);
      setInputValue('');
    }
  };

  const isInput = currentIndex === 0;

  return (
    <>
      <Header
        title="ToDo List"
      />

      <Input
        type="text"
        label="New task"
        value={value}
        onChangeValue={event => {
          setInputValue(event.target.value)
        }}
      />

      <Todos
        visible={!!todos.length}
        todos={todos}
      />

      <Softkey
        center={isInput ? "Insert" : "Toggle"}
        onKeyCenter={onKeyCenter}
        right={!isInput ? "Delete" : ""}
        onKeyRight={onKeyRight}
      />
    </>
  );
}

export default App;
