import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Card from './components/layout/card'

export default (props) => (
    <div calssName="App">
        <Card titulo="Condicional com If">
            <CondicionalComIf numero={12} />
        </Card>
        <Card titulo="Condicional v1">
            <Condicional numero={11} />
        </Card>
        <Card titulo="Repetição">
            <Repeticao />
        </Card>
        <Card titulo="Componentes Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Felicia</li>
                    <li>Penelope</li>
                    <li>Patricia</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Componente Com Parametrs">
            <ComParametro Titulo="Esse é o titulo"
                subtitulo="Esse é o subtitulo" />
            <ComParametro Titulo="Outro parametro"
                subtitulo="Geralmente usamos props, mas pode ser qualquer coisa." />
        </Card>
        <Card titulo="Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
)