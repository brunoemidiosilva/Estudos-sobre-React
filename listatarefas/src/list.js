import React, {Fragment} from "react"

export default (props)=>{
    return(
        <dl>
            <ItemsLista items={props.items}/>
        </dl>
    )
}

const ItemsLista = (props) => {
    return (
            props.items.map(item => {
                return (
                    <Fragment>
                        <dt>{item.item}</dt>
                        <dd>{item.subitem}</dd>
                    </Fragment>
                )
            })
    )
}