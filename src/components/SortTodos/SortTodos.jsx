import React from 'react'
import PropTypes from 'prop-types'
import { SORTING_TYPES } from '@/utils/constants'
import styles from './style.module.scss'

function SortTodos({ sortBy, setSortBy }) {
  const sortingTypes = Object.values(SORTING_TYPES)
  const sortHandler = (e) => setSortBy(e.target.value)

  return (
    <div className={styles.sortContainer}>
      <select defaultValue={sortBy} onChange={sortHandler} className={styles.sort__select}>
        {sortingTypes.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
    </div>
  )
}

SortTodos.propTypes = {
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
}

export default SortTodos
