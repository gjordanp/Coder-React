import React from 'react'
import { ListH, ListV } from '../lists/List'
import CartWidget from './CartWidget'
import styles from './navbar.module.css'
import flykiteLogo from '../../assets/flykite-logo.svg'

const categories=["Velas", "Barras", "Tablas", "Accesorios", <CartWidget notifications="3" />];

const NavBar = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={flykiteLogo} width="80" height="80" alt="" />
                <h2>{props.title}</h2>
            </div>
            <ListH list={categories} handleClick={props.handleClick}></ListH>
            {/* <CartWidget notifications="3" /> */}
        </div>
    )
}

export default NavBar