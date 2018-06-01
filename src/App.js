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
  }

componentDidMount(){
  this.getInventory();
}

  getInventory() {
    axios.get('/api/inventory').then(res => {
      this.setState({ inventory: res.data })
    });
  }

 
  render() {
    return (
      <div>
        <Header />
        <Dashboard inventoryList={this.state.inventory} getInventory={this.getInventory} />
        <Form getInventory ={this.getInventory} currentProduct={this.state.currentProduct}/>

      </div>
    );
  }
}

export default App;
