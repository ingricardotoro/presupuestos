import React, {Fragment} from 'react'
import { revisarPresupuesto } from '../helpers'
import PropTypes from 'prop-types'

const Control = ({presupuesto, restante}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: LPS. {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: LPS. {restante}
            </div>
        </Fragment>
    )
}

Control.propType = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default Control
