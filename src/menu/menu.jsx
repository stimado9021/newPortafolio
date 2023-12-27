import logomio from '../imagen/RODEV3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {  Link } from 'react-router-dom';
import './menu.module.css';
const Menu = ()=>{
    return(
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    
    <Link className="navbar-brand" to='/'>
        <img src={logomio} alt="" width="100"/> 
    </Link>
           
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         
          <Link className="nav-link active" to='/'><h3>Inicio</h3></Link>
        
        </li>
        <li className="nav-item">
          
          <Link className="nav-link " to='/Proyectos'><h3>Proyectos</h3></Link>
       
        </li>
        <li className="nav-item">
          
          <Link className="nav-link " to='/Sobremi'><h3>Sobre Mi</h3></Link>
      
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>
     
              
               
               
        
    )
}

export default Menu