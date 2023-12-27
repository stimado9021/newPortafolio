import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import avatar from '../imagen/avatar2.png';
import sobremi from '../imagen/sobremi.jpg';
import logo from '../imagen/RODEV3.png'
import './sobremi.module.css';


const Sobremi =()=>{
   

    return(

        <div className='bg-dark justify-content-center'>
            
            <h1 className="text-center text-white text-uppercase">Sobre Mi</h1>
            
              <div className='container'>
              <div className='row '> 
                    <div style={{ textShadow : '1px 1px 2px black', fontWeight : 'bold' }} className='col-lg-6 col-md-6 col-sm-12 text-success  bg-white p-3 '>
                        <img src={logo} alt="" width={100} />
                        <h3 className='text-center mt-2'>SEDATEZ</h3>
                        <p className='mt-2'>Se reliazo un sistema de recaudacion  de impuestos. 
                            Sofaware realiuzado con php  con su framework Codeigniter
                            javascript jquery axios mysql bootstrap
                        </p>

                        <h3 className='text-center mt-2'>CONOCIMIENTOS</h3>
                        <ul className='text-uppercase m-1'>
                            <li>html</li>
                            <li>css</li>
                            <li>bootstrap</li>
                            <li>javascript</li>
                            <li>php</li>
                            <li>react</li>
                            <li>mysql</li>
                            <li>git hub</li>
                        </ul>
                    </div>
                    <div className=' col-lg-6 col-md-6 col-sm-12' style={{display:'flex', justifyContent:   'center', padding:  '10px'}}>
                        <img src={avatar} alt="" className='img-thurbnails ' />
                    </div>
               </div>
              </div>
    </div>
        

        
    )

}

export default Sobremi