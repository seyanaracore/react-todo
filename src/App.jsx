import React, { useCallback, useState } from 'react'
import NoTodos from './components/NoTodos/NoTodos'
import TodoList from './components/TodoList/TodoList'
import TodosControl from './components/TodosControl/TodosControl'
import TodosHeader from './components/TodosHeader/TodosHeader'
import { useTodos } from './hooks/useTodos'
import { DEFAULT_TODOS, SORTING_TYPES } from './utils/constants'

function App() {
  const [todoList, setTodoList] = useState(DEFAULT_TODOS)
  const [sortBy, setSortBy] = useState(SORTING_TYPES.date)
  const [filterBy, setFilterBy] = useState('')
  const sortedAndFilteredTodos = useTodos(todoList, sortBy, filterBy)

  const addTodo = useCallback(
    (newTodo) => {
      const id = todoList.at(-1).id + 1 || 1

      setTodoList((prev) => [...prev, { ...newTodo, id }])
    },
    [todoList]
  )

  return (
    <div className="App">
      <div className="sticky-top">
        <TodosHeader addTodoHandler={addTodo} />

        {todoList.length && (
          <TodosControl setSortBy={setSortBy} sortBy={sortBy} setFilterBy={setFilterBy} />
        )}
      </div>
      {sortedAndFilteredTodos.length ? (
        <TodoList todoList={sortedAndFilteredTodos} setTodoList={setTodoList} />
      ) : (
        <NoTodos />
      )}
    </div>
  )
}

export default App
