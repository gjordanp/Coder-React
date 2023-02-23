import React from 'react'
import styles from './itemlistcontainer.module.css'
import flykiteLogo from '../../assets/flykite-logo.svg'

const ItemListContainer = (props) => {
  return (
    <div className={styles.container}>
      <img src={flykiteLogo} width="150" alt="" />
      {props.greetings}
    </div>
  )
}

export default ItemListContainer