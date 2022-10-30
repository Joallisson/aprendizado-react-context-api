import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    const handleCliente = () => {
        navigate("/clientes");
    }

    return (
        <Fragment>
            <h1>PÁGINA HOME</h1>
            <button onClick={handleCliente}>IR PARA CLIENTES</button>
        </Fragment>

    );
}