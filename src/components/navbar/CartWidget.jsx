import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import styles from './cartwidget.module.css'

const CartWidget = (props) => {
  return (
    <div className={styles.displayflex}>
        <BsFillCartFill size={30}/>
        <div className={styles.container}>{props.notifications}</div>
    </div>
    
  )
}

export default CartWidget