import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import closeIcon from '@/assets/close-icon.svg'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import styles from './style.module.scss'

function ModalWindow({ header, closeModalHandler, ...props }) {
  const formPreventSubmit = (e) => e.preventDefault()
  const modalWindowRef = useRef()

  useOnClickOutside(modalWindowRef, closeModalHandler)
  return (
    <div className={styles.modal}>
      <form className={styles.modal__window} ref={modalWindowRef} onSubmit={formPreventSubmit}>
        <div className={styles.modal__headerContainer}>
          <h3 className={styles.modalHeader}>{header}</h3>
          <button type="button" className={styles.closeModalButton} onClick={closeModalHandler}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
        {props.children}
      </form>
    </div>
  )
}

ModalWindow.defaultProps = {
  header: '',
}
ModalWindow.propTypes = {
  header: PropTypes.string,
  closeModalHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default ModalWindow
