import React from 'react'
import todoTypes from '@/typings/todo'
import { TODO_STATUSES } from '@/utils/constants'
import PropTypes from 'prop-types'
import TodoMarker from './TodoMarker'
import styles from './style.module.scss'

function Todo({ todo, completeTodo }) {
  const getDateString = (date) => new Date(date).toLocaleDateString()

  return (
    <tr className={`${styles.todoItem} table__row`}>
      <td className="table__col">
        <button
          type="button"
          className={
            todo.completed
              ? `${styles.todoCompleteBtn} ${styles.completed}`
              : styles.todoCompleteBtn
          }
          onClick={() => completeTodo(todo)}>
          {todo.completed ? <TodoMarker /> : ''}
        </button>
      </td>
      <td className="table__col">
        <div
          role="button"
          onClick={() => completeTodo(todo)}
          onKeyPress={() => {}}
          tabIndex="0"
          className={styles.todoTitle}>
          {todo.title}
        </div>
      </td>
      <td className="table__col">
        <p
          className={
            todo.completed ? `${styles.todoStatus} ${styles.completed}` : styles.todoStatus
          }>
          {todo.completed ? TODO_STATUSES[0] : TODO_STATUSES[1]}
        </p>
      </td>
      <td className="table__col">
        <p>{todo.date ? getDateString(todo.date) : 'Неизвестна'}</p>
      </td>
    </tr>
  )
}

Todo.propTypes = {
  todo: todoTypes.isRequired,
  completeTodo: PropTypes.func.isRequired,
}

export default Todo
