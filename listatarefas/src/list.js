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
                    <Fragment>
                        <dt>{item.item}</dt>
                        <Button label="X" onClick={() => props.onExcluirItem(item)}/>
                    </Fragment>
                )
            })
    )
}