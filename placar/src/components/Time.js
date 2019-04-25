import React from 'react'

export default (props) => {
    return(
      <div>
        <h1>{props.time}</h1>
        <h2>{props.placar}</h2>
        <button onClick={props.onGol}>Gol!</button>
      </div>
  
    )
  }