import React from 'react'
import styles from './style.module.scss'

export default function TodoMarker() {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.marker}>
      <path stroke="" d="M1 5L5 10.5L9.5 1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
