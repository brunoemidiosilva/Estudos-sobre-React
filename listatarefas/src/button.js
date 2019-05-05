import React from "react";
import {Button} from 'antd';

export default (props)=>{
    return(
    <Button onClick={props.onClick}>{props.label}</Button>
    )
}
