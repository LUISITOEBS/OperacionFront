import { useState } from "react";
import { useForm } from "../hooks/useForm";

const formFields ={
    id: '',
    numero1: '',
    numero2: '',
    operacion: '',
}

const formValidations = {
    id: [  (value) => !isNaN(value) && value !== '' , 'El id debe ser un número'],
    numero1: [  (value) => !isNaN(value) && value !== ''  , 'El Número 1 debe ser un número'],
    numero2: [  (value) => !isNaN(value) && value !== ''  , 'El Número 2 debe ser un número'],
    operacion: [  (value) => value.length > 0  , 'Elija una operación válida'],
}

export const useOperacionApp = () => {

    const { id, numero1, numero2, operacion, idValid, 
    numero1Valid, numero2Valid, operacionValid, 
    onInputChange, onResetForm, isFormValid } = useForm( formFields, formValidations );

    const [formSubmited, setFormSubmited] = useState(false);

    const [error, setError] = useState('');

    const [resultado, setResultado] = useState({});

    
    return {
        formSubmited,
        error,
        resultado,
        setFormSubmited,
        setError,
        setResultado,

        //useForm
        id, 
        numero1, 
        numero2, 
        operacion, 
        idValid, 
        numero1Valid, 
        numero2Valid, 
        operacionValid, 
        onInputChange, 
        onResetForm, 
        isFormValid,
        
    }
}
