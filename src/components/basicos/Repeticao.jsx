import React from 'react'
import produtos from '../../data/products'

export default props => {
    function getProdutosListItem() {
        return produtos.map(prod => {
            return
            <li key={prod.id}>
                {prod.id} - {prod.nome} : R$ {prod.preco}
            </li>
        })
    }
    //Precisa do key para o react detectar quando há uma mudança.
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}