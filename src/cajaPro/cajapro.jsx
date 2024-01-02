import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logomio from '../imagen/RODEV3.png';
import pro1 from '../imagen/pro1.jpg'
import pro2 from '../imagen/pro2.jpg'
import pro3 from '../imagen/pro3.jpg'

const CajaPro = ()=>{


        return(
            <div>
              <div className="row bg-dark">

                <div className="col-lg-4 col-md-6 col-sm-12 p-4 ">
                   <div className="card p-2">
                      <img src={pro1} className="card-img-top" alt="proeyectos" />
                        <div className="card-body">
                        <h3 className="card-title text-success">FotoWeb</h3>
                        <p className="card-text"><strong>FotoWeb</strong> es un sitio donde podras subir tus fotos y tener como, un album online esta en la etapa beta falta registrar a los usuarion y crear su espacio de almacenamiento para que guarden sus fotos.
                        
                        Esta realizado en php  con javascript y base de datos mysql</p>
                        <p className="card-text">link Para ver el sistema trabajando 
                            <a target='_blank' href='https://valentina9021.000webhostapp.com/'> https://valentina9021.000webhostapp.com/</a>
                        </p>
                      </div>
                    </div>
                  </div>   

                  <div className="col-lg-4 col-md-6 col-sm-12 p-4 ">
                   <div className="card p-2">
                      <img src={pro2} className="card-img-top" alt="proyectos" />
                        <div className="card-body ">
                        <h3 className="card-title text-success">Bingo</h3>
                        <p className="card-text">Bingo es una aplicacion que Canta Con Voces Reales las fichas que van saliendo. Esta Realizado Enteramente En javascript </p>
                        <p className="card-text">link Para ver el sistema trabajando 
                            <a target='_blank' href='https://stimado9021.github.io/bingostar9021.github.io/index.html'> https://stimado9021.github.io/bingostar9021.github.io/index.html </a>
                        </p>
                      </div>
                    </div>
                  </div>   
                  <div className="col-lg-4 col-md-6 col-sm-12 p-4 ">
                   <div className="card p-2">
                      <img src={pro3} className="card-img-top" alt="proyectos" />
                        <div className="card-body ">
                        <h3 className="card-title text-success">Infocentro</h3>
                        <p className="card-text">Pagina Oficial de Institucion Dedicada a la Difucion de la tecnologia</p>
                        <p className="card-text">link Para ver el sistema trabajando 
                            <a target='_blank' href='http://infocentrozulia.zz.com.ve'> https://infocentrozulia.zz.com.ve </a>
                        </p>
                      </div>
                    </div>
                  </div> 

               

                </div>
               

            </div>
        )

}
export default CajaPro