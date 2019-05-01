import React from 'react';
import Input from "./input"
import Button from "./button"
import List from "./list"


class App extends React.Component {
  state = {
    itemsLista: [],
    valorInput: '',
  }

  mudaTexto = (evento) => {
    const valor = evento.target.value;
    this.setState({valorInput: valor})
  }

  salvarItem = () => {    
    const lista = this.state.itemsLista
    
    const novoItem = this.state.valorInput
    const novoId = lista.length + 1

    lista.unshift({
      id: novoId,
      item: novoItem
    })

    this.setState({
      itemsLista: lista,
      valorInput: ''
     })
  }

    excluirItem = (item) => {
      const lista = this.state.itemsLista
      const novaLista = lista.filter(itemLista => {
        if(itemLista.id == item.id) return false
        else return true
      })

      this.setState({
        itemLista: novaLista
      })

    }

  render() {
    return (
      <div className="App">
        <div>
          <Input value={this.state.valorInput} onChange={this.mudaTexto} />
          <Button label="Salvar" onClick={this.salvarItem}/>
      </div>
        <div>
            <List items={this.state.itemsLista} onExcluirItem={this.excluirItem}/>
          
        </div>
      </div>
    );
  }
}

export default App;
