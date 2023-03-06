import React from 'react'
import { ListH, ListV } from '../lists/List'
import CartWidget from './CartWidget'
import styles from './navbar.module.css'
import flykiteLogo from '../../assets/flykite-logo.svg'
import useMediaQuery from '@mui/material/useMediaQuery';
import ResponsiveAppBar from './ResponsiveAppBar'
import DrawerAppBar from '../DrawerAppBar/DrawerAppBar'


const categories = ["Velas", "Barras", "Tablas", "Accesorios", <CartWidget notifications="3" />];


const NavBar = () => {
    return (
        <>
            {/* <nav className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={flykiteLogo} width="70" height="70" alt="" />
                    <h2>{title}</h2>
                </div>
                <ListH list={categories} setBtnText={setBtnText} setShowAlert={setShowAlert}></ListH>
            </nav>
            <ResponsiveAppBar/> */}
            <DrawerAppBar />

        </>

    )

}
export default NavBar