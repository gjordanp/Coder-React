import React from 'react'
import styles from './list.module.css'

export const ListH = ({list}) => {
  return (
    <ul className={styles.horizontal}>
      {list.map((item, index) => { return <li key={index}>{item}</li> })}
    </ul>
  )
}

export const ListV = ({list}) => {
  return (
    <ul className={styles.vertical}>
      {list.map((item, index) => { return <li key={index}>{item}</li> })}
    </ul>
  )
}


