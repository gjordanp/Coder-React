import React from 'react'
import { ListH, ListV } from '../lists/List'
import CartWidget from './CartWidget'
import styles from './navbar.module.css'
import flykiteLogo from '../../assets/flykite-logo.svg'

const categories=["Velas", "Barras", "Tablas", "Accesorios", <CartWidget notifications="3" />];

const NavBar = ({title,setBtnText,setShowAlert}) => {
    return (
        <nav className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={flykiteLogo} width="80" height="80" alt="" />
                <h2>{title}</h2>
            </div>
            <ListH list={categories} setBtnText={setBtnText} setShowAlert={setShowAlert}></ListH>
            {/* <CartWidget notifications="3" /> */}
        </nav>
    )
}

export default NavBar