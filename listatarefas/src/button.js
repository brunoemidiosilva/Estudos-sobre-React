import React from "react"

export default (props)=>{
    return(
    <button value={props.value} onPress={props.onPress}>{props.label}</button>
    )
}