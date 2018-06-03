import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: '',
            name: '',
            price: 0,
            currentProductId: null,
            isNewProduct: false
        }
    }

    componentDidUpdate(oldProps) {
        if (oldProps.currentProduct !== this.props.currentProduct) {
            this.setState({ currentProductId: this.props.currentProduct.product_id });
            this.setState({ isNewProduct: true });
            this.setState({
                imageUrl: this.props.currentProduct.image_url,
                name: this.props.currentProduct.name,
                price: this.props.currentProduct.price
            })

        }

    }

    createProduct() {
        axios.post('/api/product', {
            name: this.state.name,
            price: this.state.price,
            imageurl: this.state.imageUrl
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

    updateProduct() {
        axios.put('/api/product/' + this.state.currentProductId, {
            name: this.state.name,
            imageurl: this.state.imageUrl,
            price: this.state.price
        }).then(res => this.props.getInventory())
    }


    render() {
        const { imageUrl, name, price } = this.state;
        // const { currentProduct} = this.props
        return (
            <div>
                <input value={imageUrl} onChange={(e) => { this.handleImgUrlChange(e.target.value) }} />
                <input value={name} onChange={(e) => { this.handleNameChange(e.target.value) }} />
                <input value={price} onChange={(e) => { this.handlePriceChange(e.target.value) }} />

                <button onClick={() => this.handleCancel()}>Cancel</button>
                {
                    this.state.isNewProduct ?
                        <button onClick={() => this.updateProduct()}>Save Changes</button> :
                        <button onClick={() => this.createProduct()}>Add to Inventory</button>
                }
            </div>
        )
    }
}