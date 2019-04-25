import React, { Component } from 'react';
import Time from './components/Time'
import Estadio from "./components/Estadio"


export default class App extends Component {
  state={
    time1:{nome:"São Paulo", placar:0},
    time2:{nome:"Palmeiras", placar:0},
    dadosEstadio:{
      local:"Ronaldão",
      hora:"20:00"
    }
  }

   aumentarPlacarTime1= (e)=>{
     const time = this.state.time1
     time.placar = time.placar + 1
     this.setState({
       time1: time
     })
   }

   aumentarPlacarTime2= (e)=>{
    const time= this.state.time2
    time.placar= time.placar + 1
    this.setState({
      time2:time
    })

   }
  render() {
    return (
      <div>
      <Time time={this.state.time1.nome} placar={this.state.time1.placar} onGol={this.aumentarPlacarTime1}/>
      <Estadio local={this.state.dadosEstadio.local} hora={this.state.dadosEstadio.hora}/>
      <Time  time={this.state.time2.nome} placar={this.state.time2.placar} onGol={this.aumentarPlacarTime2}/>     
      </div>
      )
}
}




