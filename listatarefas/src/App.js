import React from 'react';
import Input from "./input"
import Button from "./button"
import List from "./list"
import 'antd/dist/antd.css'
import {Layout} from 'antd'
import {Row, Col} from'antd'


const {
  Header, Footer, Sider, Content,
} = Layout;

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
      <Layout>
      <Header>Header</Header>
      <Content>
           <Row type='flex' justify='center' align='middle'>
             <Col span={3}><Input value={this.state.valorInput} onChange={this.mudaTexto} /></Col>
             <Col span={3}><Button label="Salvar" onClick={this.salvarItem}/></Col>
            </Row>
            <Row type='flex' justify='center' align='middle'>
              <Col span={3}><List items={this.state.itemsLista} onExcluirItem={this.excluirItem}/></Col>
            </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
      </div>
    );
  }
}

export default App;
