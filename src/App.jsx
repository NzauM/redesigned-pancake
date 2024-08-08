import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import Student from './components/Student'
// import './App.css'



function App() {
  // const [count, setCount] = useState(0)
  const name = "Mercy Nzau"

  return (
    <>
    <Nav extraprop="Extra" button1text="Home Button" button2text="About Button" button3text="Contact Us Button" fifth="Fith prop"/>
    <h1 >This is My Vite App, and my name is {name}</h1>
    <ul id='listcontainer' className='listcontainerclass'>
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
    </ul>
    {/* <Student name={name}/> */}
    {/* <Nav button1text="Another Button" button2text="Another Button2" button3text="ANother Button 3"/>
    <Nav button2text="Bubu" button3text="Student" button4text="Curiosity"/> */}
    {/* <Student/> */}
    </>
  )
}

export default App
