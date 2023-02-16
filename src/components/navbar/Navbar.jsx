import React from 'react'
import {ListH, ListV} from '../lists/List'
import CartWidget from './CartWidget'
import styles from './navbar.module.css'


const NavBar = (props) => {
    return (
        <div className={styles.container}>
            <h2>{props.title}</h2>
            <ListH list = {["Velas","Barras","Tablas","Accesorios"]} handleClick={props.handleClick}></ListH>
            <CartWidget notifications="3" />
        </div>
    )
}

export default NavBar