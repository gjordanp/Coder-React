import React from 'react'
import styles from './ItemListContainer.module.css'

const ItemListContainer = (props) => {
  return (
    <div className={styles.container}>{props.greetings}</div>
  )
}

export default ItemListContainer