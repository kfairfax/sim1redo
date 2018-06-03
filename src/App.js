import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      currentProduct: {}
    }
   
    this.getInventory=this.getInventory.bind(this);
    this.setSelectedProduct=this.setSelectedProduct.bind(this);
  }

componentDidMount(){
  this.getInventory();
}

  getInventory() {
    axios.get('/api/inventory').then(res => {
      this.setState({ inventory: res.data })
    });
  }

setSelectedProduct(product){
  this.setState({currentProduct:product})
}



 
  render() {
    return (
      <div>
        <Header />
        <Dashboard inventoryList={this.state.inventory} getInventory={this.getInventory} setSelectedProduct={this.setSelectedProduct}/>
        <Form getInventory ={this.getInventory} currentProduct={this.state.currentProduct}/>

      </div>
    );
  }
}

export default App;
