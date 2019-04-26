import React from "react"

export default (props)=>{
    return(
    <button  onPress={props.onPress}>{props.label}</button>
    )
}