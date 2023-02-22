import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/buttons/button'
import NavBar from './components/navbar/NavBar'
import { ListH, ListV } from './components/lists/List'
import ItemListContainer from './components/containers/ItemListContainer'
import { Alert, AlertTitle, Snackbar } from '@mui/material'





function App() {
  const [showAlert, setShowAlert] = useState(false);
  const[btnText, setBtnText] = useState("2");
  const [open, setOpen] = useState(true);
  const handleClose = () => {setShowAlert(false)};
  

  return (
    //React Fragment
    <>
      <NavBar title="FlyKite" setBtnText={setBtnText} setShowAlert={setShowAlert}/>
      <ItemListContainer greetings="Bienvenidos a FlyKite" />
      {showAlert &&
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert variant="outlined" severity="success" onClose={handleClose}>
          <AlertTitle>Click</AlertTitle>
          {btnText}
        </Alert>
        </Snackbar>
      }
      {/* <Button text="Button1" handleClick={handleClick}/>
      <Button text="Button2" handleClick={handleClick}/>
      <Button text="Button3" handleClick={handleClick}/> */}
    </>
  )
}

export default App
