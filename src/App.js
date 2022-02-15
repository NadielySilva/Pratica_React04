import React, { Component } from 'react';

export default class Arrow extends Component {

  text = (frase) =>{
    return 'Isso é uma '+frase+' function.'
  }
  
  numero = (x) =>{
    return x
  }

  dobro = (x) =>{
    return x*2
  }

  render(){
    return(
      <div>
        <h1>{this.text('arrow')}</h1>
        <h2>O dobro de {this.numero(20)} é {this.dobro(20)}</h2>
      </div>
    )
  }
}



//Crie um component de class

// Crie uma arrow function que receba uma mensagem e exiba na tela

// Crie uma arrow function que retorne o dobro de um número e exiba na tela