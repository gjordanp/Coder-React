import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/buttons/button'
import NavBar from './components/navbar/NavBar'
import {ListH, ListV} from './components/lists/List'


const handleClick = () => { console.log('Button Clicked') }

function App() {
  const [count, setCount] = useState(0)

  return (
    //React Fragment
    <div> 
      <NavBar/>
      <Button text="Button1" handleClick={handleClick}/>
      <Button text="Button2" handleClick={handleClick}/>
      <Button text="Button3" handleClick={handleClick}/>
    </div>
  )
}

export default App
