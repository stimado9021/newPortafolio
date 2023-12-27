import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route} from 'react-router-dom';
import Rodapie from './rodapie/rodapie'
import Inicio from './inicio/inicio';
import Proyectos from './proyectos/proyectos';
import Sobremi from './sobremi/sobremi';
import './App.css'
import Menu from './menu/menu'; 

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div>
    <Menu/>
    
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/Proyectos' element={<Proyectos />} />
      <Route path='/Sobremi' element={<Sobremi />} />
    </Routes>
    <Rodapie />
   
    </div>
  )
}

export default App
