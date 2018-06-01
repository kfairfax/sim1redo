import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state ={

        }
        this.deleteProduct=this.deleteProduct.bind(this);
    }

    deleteProduct(id) {
        axios.delete('/api/product/'+ id).then(res => {
          this.props.getInventory();
        });
      }

    render(){
        const inventory=this.props.inventoryList;
        const setSelectedProduct=this.props.setSelectedProduct;
        
        return(
            <div>
               {
                   inventory.map((inventory, i )=>(
                    <Product key={i}
                    product={inventory}
                    deleteProductFn={this.deleteProduct}
                    setSelectedProduct={setSelectedProduct}/>
               ))
            }
            </div>
        )
    }
}