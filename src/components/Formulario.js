import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Error from './Error'
import shortid from 'shortid'

const Formulario = ({setGasto,setMostrarGasto}) => {

    const [nombre , setNombre ] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    //funcion para agregar gastos
    const agregarGasto =(e)=>{
        e.preventDefault()

        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim()===''){
            setError(true)
            return
        }

        setError(false)
        
        //creando el gasto
        const gasto = {
           nombre,
           cantidad,
           id:shortid.generate()
        }

        setGasto(gasto)
        setMostrarGasto(true)

        setNombre('')
        setCantidad('')

    }
    return (
        <form onSubmit={agregarGasto}>
            <h2>Agregar tus gastos aqui</h2>

            {error ? <Error mensaje="Error al ingresar Datos"/> :null }
            <div className="campo">
                <label>Nombre de Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Eje. Transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Valor de Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Eje. 1000.00"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}

                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

            
        </form>
    )
}

Formulario.propType = {
    setGasto: PropTypes.func.isRequired,
    setMostrarGasto: PropTypes.func.isRequired
}

export default Formulario
