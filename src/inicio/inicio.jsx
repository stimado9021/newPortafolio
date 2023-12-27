import React from 'react'

import './inicio.module.css';
import avatar from '../imagen/avatar4.png';



const Inicio =()=>{

    return(

        <div className='bg-dark pb-5'>
            <h1 className='text-center text-white'>DEVELOPER</h1>
            <div className='row mt-5'>
                <div className='col-lg-4 col-md-4 col-sm-12 p-4 m-2 contenedor'>
                        <img src={avatar} alt="avatar" className='rounded mx-auto d-block avatar' />
                </div>
                        <div className='col-lg-6 col-md-8 col-sm-12 p-4  bg-white'>
                           
                           <h4 className='text-center text-success'>Hola Conoceme</h4>
                            <h1 className='text-center text-primary' >Rafael Orozco</h1>
                            <h3 className='text-center mt-5 ' >soy un programador Full Stack,Estoy emocionado de presentarte mi portafolio y compartirte algunas de las habilidades y proyectos que he desarrollado</h3>
                            <div className="justify-content-center col-4 mx-auto mt-5">
                                <a target="_blank" href='https://drive.google.com/file/d/1QLUfnmlu-qCOuOsflNAAD9A8Kz9ADEuF/view?usp=drive_web' className='btn btn-success btn-lg mt-2'>Descargar C.V.</a>
                            </div>
                            
                         
                        </div>
              
</div>
           
            
        </div>        
    )
}


export default Inicio