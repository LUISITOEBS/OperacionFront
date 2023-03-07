import React from 'react'

export const Success = ( {id, resultado }) => {
    return (
        <div className="alert alert-success">
            <h5>Operación realizada: </h5>
            <br />
            <p>ID: { id }</p>
            <p>Resultado: { resultado }</p>
        </div>
    )
}
