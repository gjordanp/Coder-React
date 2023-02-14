import React from 'react'
import styles from './navbar.module.css'


const NavBar = () => {
    return (
        <div className={styles.container}>
            <h2>NavBar</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar