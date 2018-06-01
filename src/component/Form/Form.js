import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: '',
            name: '',
            price: 0,
            currentProductId: null
        }
    }

    createProduct() {
        axios.post('/api/product', {
            name:this.state.name, 
            price: this.state.price, 
            imageurl: this.state.imageurl
        }).then(res => {
            this.props.getInventory();
            this.handleCancel();
        })
    }

    handleImgUrlChange(val) {
        this.setState({ imageUrl: val })
    }
    handleNameChange(val) {
        this.setState({ name: val })
    }
    handlePriceChange(val) {
        this.setState({ price: val })
    }

    handleCancel() {
        this.setState({
            imageUrl: '',
            name: '',
            price: ''
        });
    }

    render() {
        const { imageUrl, name, price} = this.state;
        const{currentProduct}=this.props
        return (
            <div>
                <input value={imageUrl} onChange={(e) => { this.handleImgUrlChange(e.target.value) }} />
                <input value={name} onChange={(e) => { this.handleNameChange(e.target.value) }} />
                <input value={price} onChange={(e) => { this.handlePriceChange(e.target.value) }} />

                <button onClick={() => this.handleCancel()}>Cancel</button>
                <button onClick={()=>this.createProduct()}>Add to Inventory</button>
            </div>
        )
    }
}