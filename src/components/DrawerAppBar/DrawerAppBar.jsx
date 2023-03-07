import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from '../navbar/CartWidget';
import { createTheme, Tooltip } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import flykiteLogo from '../../assets/flykite-logo.svg';
import flykiteLogoBlack from '../../assets/flykite-logo-bl.svg';
import styles from './DrawerAppBar.module.css';
import { Link, NavLink } from 'react-router-dom';

const drawerWidth = 240;
//const navItems = ['Home', 'About', 'Contact'];
//const navItems = ["Velas", "Barras", "Tablas", "Accesorios", <CartWidget notifications="3" />];
const navItems = ["men's clothing", "jewelery", "electronics", "women's clothing", <CartWidget notifications="3" />];

const darkTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#000000',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

let activeStyle = {
  textDecoration: "underline",
};

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Typography className={styles.logocontainer} variant="h6" sx={{ my: 1 }}>
        <img src={flykiteLogoBlack} width="40px" alt="" style={{opacity:0.85}}/> 
        <h4>FlyKite</h4>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink to={`/Coder-React/categories/${item}`} key={item} style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBar component="nav" color="primary">

          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Tooltip title="Home" >
              <Link to={`/Coder-React`} style={{ textDecoration: "none", color: "inherit" }}>
                <Box sx={{ display: { xs: 'flex', sm: 'flex' }, margin: 'auto' }}>
                  <img src={flykiteLogo} width="40px" alt="" />
                  <h3>FlyKite</h3>
                </Box>
              </Link>
            </Tooltip>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <NavLink to={`/Coder-React/categories/${item}`} key={item}>
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar></ThemeProvider>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;