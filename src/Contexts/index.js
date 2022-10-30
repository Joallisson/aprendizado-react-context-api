import React, { createContext, useContext, useState } from "react";

const ClienteContext = createContext({});

export const ClinteProvider = ({ children }) => {
    const [filtro, setFiltro] = useState('FILTRO 1');
    const [clientes, setClientes] = useState([
        {nome: 'joallisson'},
        {nome: 'alex'},
        {nome: 'josivaldo'}
    ]);

    return(
        <ClienteContext.Provider value={{ 
            filtro,
            setFiltro,
            clientes,
            setClientes
        }}>
            {children}
        </ClienteContext.Provider>
    );
}

export const useCliente = () => useContext(ClienteContext);
