import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCard from './Components/MyCard'
import Data from './data.json'
import List from './Components/UniqueList/List'
import Card2 from './Components/ClassComponenet'
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import ReactBootstrap from './Components/ReactBootstrap/ReactBootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import STATE from './Components/State/STATE'
import Conditional_Rendaring from './Conditional_Rendaring/Index'
import Event_Handler_Class from './Components/Event_Handler_Class'
import Hooks_UseState1 from './Components/Hooks_UseState/index1'
import Hooks_UseState2 from './Components/Hooks_UseState/index2'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='cardHeader'>React</h1>
       {/* get data using map. Basically, map() is use instead of for loop! */}
       {Data.map((item, index)=> <MyCard key={index} titleText ={item.title} descriptionText={item.desc}/>)}

       <List />
       <span>
       <FaFacebook className='icon' />
       </span>
       <span><FaYoutube className='icon' /></span>
       <Card2 name='Card2' describe ='card2 describe'/>
       <ReactBootstrap />
       <STATE />
       {/* conditional rendaring called here*/}
       <Conditional_Rendaring/>
       {/* Event handle by class component */}
       <Event_Handler_Class/>
      {/* hooks use state */}
      <Hooks_UseState1 />
      <Hooks_UseState2 />
    </>
  )
}

export default App
 