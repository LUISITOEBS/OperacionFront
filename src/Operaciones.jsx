import { Error } from "../components/Error";
import { Success } from "../components/Success";
import clienteAxios from "../helpers/clienteAxios";
import { useOperacionApp } from "../hooks/useOperacionApp";

export const Operaciones = () => {
    const { formSubmited, error, resultado, setError, setResultado, setFormSubmited, operacion,
        id, numero1, numero2, idValid, numero1Valid, numero2Valid, operacionValid, onInputChange, 
        onResetForm, isFormValid} = useOperacionApp();

    const submitForm = async( e ) => {
        setError('');
        setResultado({});
        e.preventDefault();
        setFormSubmited( true );
        if( !isFormValid ) return;
        try {
            
            const { data } = await clienteAxios.post('/operacion', { id , numero1, numero2, operacion });
            setResultado( { id: data.id, resultado: data.resultado } );

        } catch (error) {
            setError(error.response.data.message);
        }
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Crear Operación</h4>
                        </div>
                        <div className="card-body mb-2">
                            
                            {   
                                error.length > 1 &&
                                <Error error={ error }/>
                            }

                            {   
                                Object.keys(resultado).length !== 0  &&
                                <Success { ...resultado } />
                            }
                            
                            <form className="mb-2" onSubmit={ submitForm } noValidate>
                                <div className="form-group">
                                    <label htmlFor="numero1">ID: </label>
                                    <input
                                    type="number"
                                    className="form-control"
                                    id="id"
                                    name="id"
                                    value={ id }
                                    onChange={ onInputChange }
                                    required
                                    />
                                    { !!idValid && formSubmited && <span className="text-danger">{ idValid }</span>}
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="numero1">Número 1</label>
                                    <input
                                    type="number"
                                    className="form-control"
                                    id="numero1"
                                    name="numero1"
                                    value={ numero1 }
                                    onChange={ onInputChange }
                                    required
                                    />
                                    { !!numero1Valid && formSubmited && <span className="text-danger">{ numero1Valid }</span>}
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="numero2">Número 2</label>
                                    <input
                                    type="number"
                                    className="form-control"
                                    id="numero2"
                                    name="numero2"
                                    value={ numero2 }
                                    onChange={ onInputChange }
                                    required
                                    />
                                    { !!numero2Valid && formSubmited && <span className="text-danger">{ numero2Valid }</span>}
                                </div>
                                <br />
                                <div className="form-group">
                                    <select 
                                        name="operacion" 
                                        id="operacion"
                                        className="form-select"
                                        onChange={ onInputChange }
                                        value={ operacion }
                                    >
                                        <option value="">
                                            -- Elija una operación --
                                        </option>
                                        <option value="suma">
                                            -- Sumar --
                                        </option>
                                        <option value="resta" >
                                            -- Restar --
                                        </option>
                                        <option value="multiplicacion">
                                            -- Multiplicar --
                                        </option>
                                        <option value="division">
                                            -- Dividir --
                                        </option>
                                    </select>
                                    { !!operacionValid && formSubmited && <span className="text-danger">{ operacionValid }</span>}
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary mt-4">
                                        Calcular Operación
                                    </button>
                                </div>
                                <br />
                                <br />
                                <button onClick={ onResetForm } type="button" className="btn btn-warning">
                                    <span className="text-sm">Reiniciar formulario</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
