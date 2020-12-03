import React, { useEffect, useState } from 'react'
import Control from './components/Control'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Pregunta from './components/Pregunta'



function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrarPregunta, setMostrarPregunta] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [mostrarGasto, setMostrarGasto] = useState(false)

  //actualizar valor restante
  useEffect(() => {
    
    if(mostrarGasto){
      //agregar gasto al presupuesto y actualizaro

      setGastos([
        ...gastos,
        gasto
      ])

      //restar del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)

      //resetear mostrarGasto
      setMostrarGasto(false)
    }

  }, [gasto,mostrarGasto,restante,gastos])


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">

          {mostrarPregunta ? 
            (  
              <Pregunta 
                setPresupuesto={setPresupuesto} 
                setRestante={setRestante}
                setMostrarPregunta={setMostrarPregunta} 
              />
            )
          :
          (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setMostrarGasto={setMostrarGasto} />
              </div>
            
              <div className="one-half column">
                <Listado gastos={gastos} />
                <Control presupuesto={presupuesto} restante={restante} />
              </div>
            </div>
          )
          }


        </div>
      </header>
    </div>
  );
}

export default App;
