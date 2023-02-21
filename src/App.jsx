import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/buttons/button'
import NavBar from './components/navbar/NavBar'
import {ListH, ListV} from './components/lists/List'
import ItemListContainer from './components/containers/ItemListContainer'


const handleClick = (e) => {alert(e.target.innerText)}

function App() {

  return (
    //React Fragment
    <> 
      <NavBar title="FlyKite" handleClick={handleClick}/>
      <ItemListContainer greetings="Bienvenidos a FlyKite"/>
      {/* <Button text="Button1" handleClick={handleClick}/>
      <Button text="Button2" handleClick={handleClick}/>
      <Button text="Button3" handleClick={handleClick}/> */}
    </>
  )
}

export default App
