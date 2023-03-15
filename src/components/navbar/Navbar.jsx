import React from 'react'
import { ListH, ListV } from '../lists/List'
import CartWidget from './CartWidget'
import styles from './navbar.module.css'
import flykiteLogo from '../../assets/flykite-logo.svg'
import useMediaQuery from '@mui/material/useMediaQuery';
import ResponsiveAppBar from './ResponsiveAppBar'
import DrawerAppBar from '../DrawerAppBar/DrawerAppBar'


const categories = ["Velas", "Barras", "Tablas", "Accesorios"];


const NavBar = () => {
    return (
        <>
            <DrawerAppBar />
        </>

    )

}
export default NavBar