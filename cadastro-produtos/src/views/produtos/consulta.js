import React from 'react'

import ProdutoService from '../../app/produtoService'

export default class ConsultaProdutos extends React.Component{

    state = {
        produtos : []
    }

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({ produtos })
    }

    render(){
        return (
            <div className="card">
                <div className="card-header">
                    Consulta Produtos
                </div>
                <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>SKU</th>
                                    <th>Preço</th>
                                    <th>Fornecedor</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.produtos.map( (produto, index) => {
                                        return (
                                            <tr key={index}>
                                                <th>{produto.nome}</th>
                                                <th>{produto.sku}</th>
                                                <th>{produto.preco}</th>
                                                <th>{produto.fornecedor}</th>
                                                <th></th>
                                            </tr>
                                        )
                                    }) 
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}