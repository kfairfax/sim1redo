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
        
        return(
            <div>
               {
                   inventory.map((inventory, i )=>(
                    <Product key={i}
                    imageUrl={inventory.image_url}
                    name={inventory.name}
                    price={inventory.price}
                    deleteProductFn={this.deleteProduct}
                    productId={inventory.product_id}/>
               ))
            }
            </div>
        )
    }
}