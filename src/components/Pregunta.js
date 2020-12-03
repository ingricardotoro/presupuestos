import React, {Fragment, useState} from 'react'
import Error from './Error'

const Pregunta = ({setRestante, setPresupuesto,setMostrarPregunta}) => {

    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const definirPresupuesto = (e)=>{
        //console.log(parseInt(e.target.value))
        setCantidad(parseInt(e.target.value))
    }

    const agregarPresupuesto = (e) =>{
        e.preventDefault()

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return
        }

        //si ha pasado la validacion
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarPregunta(false)
    }

    return ( 
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es Incorrecto" /> :null }

            <form onSubmit={agregarPresupuesto}>
                
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="u-full-width button-primary"
                    value="Guardar Presupuesto"
                />

            </form>
        </Fragment>
    )
}

export default Pregunta
