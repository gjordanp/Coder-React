import React from 'react'
import {ListH, ListV} from '../lists/List'
import styles from './navbar.module.css'


const NavBar = () => {
    return (
        <div className={styles.container}>
            <h2>NavBar</h2>
            <ListH list = {["Inicio", "Nosotros", "Contacto"]}></ListH>
        </div>
    )
}

export default NavBar