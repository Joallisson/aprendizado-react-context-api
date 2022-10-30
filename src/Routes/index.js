import React from "react";
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom'
import { Home } from './../pages/Home'
import { Clientes } from './../pages/Clientes'
import { InfoCliente } from './../pages/Clientes/InfoCloientes'
import { ClinteProvider } from "../Contexts";

export const Routes = () => {

    return (
        <BrowserRouter>
            <Router>
                <Route element={<Home />} path="*" />
                <Route element={
                    <ClinteProvider>
                        <Clientes />
                    </ClinteProvider>}
                    path="/clientes"
                />
                <Route element={
                    <ClinteProvider>
                        <InfoCliente />
                    </ClinteProvider>}
                    path="/informacoes/cliente"
                />
            </Router>
        </BrowserRouter>
    );
}