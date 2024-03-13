import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './eam'
import Users from './Use'
import Frinds from './Frinds'
import Frind from './Frind'
function App() {
  function handleClick(){
    alert('button clicked')
    
  }
  function handleClick2(){
    alert('clicked 2')
  }
  const addToFive = (num) =>{
    alert(num+ 5)
  }
 
  return (
    <>
   
      <Frinds></Frinds>
      <Users></Users>
      <h3>React core concepts 2</h3>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>clicked 2</button>
      <button onClick={() => {alert('hi')}}>clicked 3</button>
      <button onClick={() =>addToFive(7)}>Four</button>
     <Team></Team>

    </>
  )
}

export default App
