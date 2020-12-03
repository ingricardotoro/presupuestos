import React from 'react'

const Formulario = () => {

    const [nombre , setnombre ] = useState(initialState)

    return (
        <form>
            <h2>Agregar tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre de Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Eje. Transporte"
                />
            </div>

            <div className="campo">
                <label>Valor de Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Eje. 1000.00"
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

export default Formulario
