import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import searchIcon from '@/assets/search-icon.svg'
import styles from './style.module.scss'

function TodosFilter({ setFilterBy }) {
  const [inputFilter, setInputFilter] = useState('')
  const inputHandler = (e) => setInputFilter(e.target.value)

  useEffect(() => {
    setFilterBy(inputFilter)
  }, [inputFilter])

  return (
    <div className={styles.todoFilterContainer}>
      <img className={styles.searchIcon} src={searchIcon} alt="" />
      <input
        type="text"
        onChange={inputHandler}
        value={inputFilter}
        className={styles.todoFilterInput}
        placeholder="Поиск ID, Имени, статуса или даты"
      />
    </div>
  )
}

TodosFilter.propTypes = {
  setFilterBy: PropTypes.func.isRequired,
}

export default TodosFilter
