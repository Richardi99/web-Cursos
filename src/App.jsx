import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './component/Navbar'
import { Slider2 } from './component/Slider2'
import { Card } from './component/card-'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
    <Navbar />
    <h1>Aprende con los mejores <span>cursos online</span></h1>
    {/* <Slider /> */}
    <Slider2/>
    <h3>Excelente experiencia <strong>en educacion online</strong></h3>
    <Card/>
    <h4 className='cursos'>Cursos</h4>
    </>
  )
}

export default App
