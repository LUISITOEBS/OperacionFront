import React from 'react'

export const Error = ( { error } ) => {
    return (
        <div className="alert alert-danger">
            <h2>Error: </h2>
            <p>{ error }</p>
        </div>
    )
}
