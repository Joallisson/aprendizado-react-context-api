import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCliente } from '../../Contexts';

export const Clientes = () => {
    const { filtro, setFiltro, clientes, setClientes } = useCliente();

    const [newCliente, setNewCliente] = useState();

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }

    const handleInfoCliente = () => {
        navigate('/informacoes/cliente');
    }

    const handleAdcionarCliente = (novoCliente) => {
        setClientes(oldState => [...oldState, { nome: novoCliente}]);
        setNewCliente('');
    }

    return (
        <Fragment>
            <h1>PÁGINA CLIENTE</h1>
            <select
                onChange={e => setFiltro(e.target.value)}
                value={filtro}
            >
                <option value="FILTRO 1">FILTRO 1</option>
                <option value="FILTRO 2">FILTRO 2</option>
                <option value="FILTRO 3">FILTRO 3</option>
            </select>

            <br />
            <br />
            <div>
                <h4>ADICIONAR NOVO USUÁRIO</h4>
                <input
                    value={newCliente}
                    type='text'
                    onChange={e => setNewCliente(e.target.value)}
                />
                <button onClick={(e) => handleAdcionarCliente(newCliente)} >ADICIONAR</button>
            </div>

            <h4>LISTA DE CLIENTES</h4>
            <ul>
                {clientes.map((value) => (
                    <li>{value.nome}</li>
                ))
                }
            </ul>

            <div style={{ marginTop: '200px', display: 'flex', justifyContent: 'space-around', background: 'red' }}>
                <button onClick={handleHome}>HOME</button>
                <button onClick={handleInfoCliente}>INFO CLIENTES</button>
            </div>
        </Fragment>

    );

}