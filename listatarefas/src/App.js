import React from 'react';
import Input from "./input"
import Button from "./button"
import List from "./list"


class App extends React.Component {
  state = {
    itemsLista: [
      {
        id: 1,
        item: 'Testando',
        subitem: 'teu cu'
      },
      {
        id: 2,
        item: 'Testando 2'
      },
      {
        id: 3,
        item: 'Testando 3'
      },
      {
        id: 4,
        item: "nome 4"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <div>
          <Input value="0"/>
          <Button label="Salvar"/>
      </div>
        <div>
            <List items={this.state.itemsLista}/>
        </div>
      </div>
    );
  }
}

export default App;
