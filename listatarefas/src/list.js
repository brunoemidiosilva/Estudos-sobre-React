import React, {Fragment} from "react"
import Button from "./button"

export default (props)=>{
    return(
        <dl>
            <ItemsLista items={props.items} onExcluirItem={props.onExcluirItem}/>
        </dl>
    )
}

const ItemsLista = (props) => {
    return (
            props.items.map(item => {
                return (
                    <dt>
                        <span>{item.item}</span>
                        <Button label="X" onClick={() => props.onExcluirItem(item)}/>
                    </dt>
                )
            })
    )
}