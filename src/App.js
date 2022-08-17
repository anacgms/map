import React, { Component } from 'react'

export default class App extends Component{

  state = {

    produtos: [
      {
        nome: "relógio",
        marca: "condor",
        valor: 200,
        descricao: "Perfeito"
      }, 
      {
        nome: "bicicleta",
        marca: "caloi",
        valor: 500,
        descricao: "Incrivel"
      }, 
      {
        nome: "computador",
        marca: "positivo",
        valor: 1.000,
        descricao: "Maravilhoso"
      },
      {
        nome: "lanterna",
        marca: "philco",
        valor: 50,
        descricao: "útil" 
      },
      {
        nome: "Alexa",
        marca: "Amazon",
        valor:250,
        descricao: "Melhor impossível" 
      },
      {
        nome: "Portrait 3.0",
        marca: "Silhouette",
        valor: 2.500,
        descricao: "Picote a todo vapor"  
      }
    ]
  }

render(){
  return(
    <div>
      {this.state.produtos.map((item)=>(
    <div>
    <h2>{item.nome}, {item.marca},{item.valor}, {item.descricao}</h2>
    </div>
       ))} 
    </div>
     
  )
   }
}



