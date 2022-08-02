import React, { useCallback } from 'react'
import todoListTypes from '@/typings/todoList'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo'
import TodoListHeaders from './TodoListHeaders'
import './style.scss'

function TodoList({ todoList, setTodoList }) {
  const removeTodo = useCallback(
    (todoToDelete) => {
      setTodoList((prev) => prev.filter((todo) => todo.id !== todoToDelete.id))
    },
    [todoList]
  )

  const completeTodo = useCallback(
    (completedTodo) => {
      setTodoList((prev) =>
        prev.map((todo) =>
          todo.id === completedTodo.id ? { ...todo, completed: !todo.completed } : todo
        )
      )
    },
    [todoList]
  )

  return (
    <table className="table">
      <thead className="table__headers">
        <TodoListHeaders />
      </thead>
      <tbody>
        {todoList.map((todo) => (
          <Todo todo={todo} key={todo.id} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
      </tbody>
    </table>
  )
}

TodoList.propTypes = {
  todoList: todoListTypes.isRequired,
  setTodoList: PropTypes.func.isRequired,
}

export default TodoList
