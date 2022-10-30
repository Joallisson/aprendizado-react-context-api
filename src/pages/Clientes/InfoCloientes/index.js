import React, {Fragment} from 'react';
import { useNavigate } from 'react-router-dom';

export const InfoCliente = () => {
    const navigate = useNavigate();

    const handleClientes = () => {
        navigate('/clientes');
    }

    return (
        <Fragment>
            <h1>PÁGINA DE INFORMAÇÕES DOS CLIENTES</h1>
            <button onClick={handleClientes}>IR PARA CLIENTES</button>
        </Fragment>

    );
}