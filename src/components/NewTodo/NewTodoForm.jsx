import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

export default function NewTodoForm({ newTodoHandler }) {
  const [todoTitle, setTodoTitle] = useState('')
  const inputHandler = (e) => setTodoTitle(e.target.value)
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const submitTodo = () => {
    if (!todoTitle.length) return

    const todo = {
      title: todoTitle,
      completed: false,
      date: +new Date(),
    }

    newTodoHandler(todo)
  }

  return (
    <>
      <div className={styles.todoTitleContainer}>
        <p className={styles.todoTitleHeader}>Описание</p>
        <input
          className={styles.todoTitle}
          type="text"
          ref={inputRef}
          value={todoTitle}
          placeholder="Введите описание"
          onChange={inputHandler}
        />
      </div>
      <button type="submit" className={styles.modal__createTodoButton} onClick={submitTodo}>
        Создать
      </button>
    </>
  )
}

NewTodoForm.propTypes = {
  newTodoHandler: PropTypes.func.isRequired,
}
