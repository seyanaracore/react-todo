import React from 'react'
import PropTypes from 'prop-types'
import NewTodo from '../NewTodo/NewTodo'

function TodosHeader({ addTodoHandler }) {
  return (
    <header className="header top-wrapper">
      <h1 className="title">To do list</h1>
      <NewTodo addTodoHandler={addTodoHandler} />
    </header>
  )
}

TodosHeader.propTypes = {
  addTodoHandler: PropTypes.func.isRequired,
}

export default TodosHeader
