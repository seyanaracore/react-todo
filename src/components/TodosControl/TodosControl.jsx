import React from 'react'
import PropTypes from 'prop-types'
import TodosFilter from '../TodosFilter/TodosFilter'
import SortTodos from '../SortTodos/SortTodos'

function TodosControl({ sortBy, setSortBy, setFilterBy }) {
  return (
    <div className="todo-list-control-container top-wrapper">
      <TodosFilter setFilterBy={setFilterBy} />
      <SortTodos sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  )
}

TodosControl.propTypes = {
  setFilterBy: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
}

export default TodosControl
