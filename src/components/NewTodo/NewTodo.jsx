import React, { useState } from 'react'
import PropTypes from 'prop-types'
import addIcon from '@/assets/add-icon.svg'
import ModalWindow from '../UI/Modal/ModalWindow'
import NewTodoForm from './NewTodoForm'
import styles from './style.module.scss'

function NewTodo({ addTodoHandler }) {
  const [modal, setModal] = useState(false)
  const closeModal = () => setModal(false)
  const openModal = () => setModal(true)

  const newTodoHandler = (todo) => {
    addTodoHandler(todo)
    setModal(false)
  }

  return (
    <div>
      {modal && (
        <ModalWindow header="Создать новую задачу" closeModalHandler={closeModal}>
          <NewTodoForm newTodoHandler={newTodoHandler} />
        </ModalWindow>
      )}
      <button type="button" className={styles.showModalButton} onClick={openModal}>
        <img src={addIcon} alt="" />
      </button>
    </div>
  )
}

NewTodo.propTypes = {
  addTodoHandler: PropTypes.func.isRequired,
}

export default NewTodo
