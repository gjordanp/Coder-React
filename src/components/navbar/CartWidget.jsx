import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from './cartwidget.module.css'

const CartWidget = (props) => {
  return (
    <div className={styles.displayflex}>
        <ShoppingCartOutlinedIcon size={30}/>
        <div className={styles.container}>{props.notifications}</div>
    </div>
    
  )
}

export default CartWidget