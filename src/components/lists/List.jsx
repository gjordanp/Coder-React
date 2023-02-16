import React from 'react'
import styles from './list.module.css'
import Button from '../buttons/button'



export const ListH = ({ list, handleClick }) => {
  return (
    <ul className={styles.horizontal}>
      {list.map((item, index) => {
        return <li key={index} onMouseOver={styles.mouseOverPointer}>
          <Button text={item} handleClick={handleClick}>{item}</Button>
        </li>
      })}
    </ul>
  )
}

export const ListV = ({ list }) => {
  return (
    <ul className={styles.vertical}>
      {list.map((item, index) => {
        return <li key={index} onMouseOver={styles.mouseOverPointer}>
          <Button text={item}>{item}</Button>
        </li>
      })}
    </ul>
  )
}


