import React, { Component } from 'react';

import api from '../../services/api';

export default class Home extends Component{

    state = {
        page:0,
        products:[],


    }


    async componentDidMount(){
      this.getProducts()

    }

    getProducts = async(page = 0)=>{

      const response = await api.get(`/api/products?page=${page}`);
      const{data} = response.data;

      this.setState({products:data});

    }
    next = (event) =>{
      const page = parseInt(event.target.value);
      const {products} = this.state;
      if(products.length > 1){
        const next = page+1;
        this.setState({page:next})
        this.getProducts(next)
      }
    }

    back = (event)=>{
      const page = parseInt(event.target.value);
      if(page > 0){
        const back = page-1;
        this.setState({page:back})
        this.getProducts(back)
        console.log(back);
      }

    }

    render(){
      const { products,page }= this.state;
      return(
        <div>
        <main>

          <button type='button' value={page} onClick={this.back} >Anterior</button>
          <strong>Page:{page}</strong>
          <button type='button' name='btnNext' value={page} onClick={this.next} >Proxima</button>

          <table className='list-products' border='1'>
          <tbody>
                <tr>
                  <th>Code</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>R$ A vista</th>
                  <th>R$ A Prazo</th>
                </tr>
                {products.map((product)=>{
                  return(
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.cashValue}</td>
                        <td>{product.termValue}</td>
                      </tr>
                  )
                })}

              </tbody>
          </table>
          </main>
        </div>
      )
    }
}
