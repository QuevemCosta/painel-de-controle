import React, { Component } from 'react';

import api from '../../services/api';

export default class FormNewCategory extends Component{
    constructor(props){
        super(props);
        this.state ={ name:'',msg:''};
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);

      }
      handleChange(event){
          this.setState({ name: event.target.value });
      }
      handleSubmit(event){
        event.preventDefault();

        this.postCategory(this.state.name);

      }
      postCategory = async(name)=>{

	      console.log({name})
	      const response = await api.post(`/api/category/`,{name})
	
	      console.log(response)

	      if(response.status === 200){
	      	this.setState({msg:'Sucesso'})
	      }
	      else{
	      	alert('Falha na operação! Tente novamente');
	      }

      }
    render(){

      return(
        <div>
        <main>
          <form  onSubmit={this.handleSubmit} method='POST'>
              <h3>Nova Categoria</h3>
              <input
                type='text'
                id='category'
                onChange={this.handleChange}
                value={this.state.category}
                placeholder='Nova Categoria'/>
              <br/>
              <input type='submit' value='Cadastrar' />
          	<span>{this.state.msg}</span>
	   </form>
        </main>
        </div>
      )
    }
}
