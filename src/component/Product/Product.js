import React from 'react';

const Product =(props) => {


    const{deleteProductFn, product, setSelectedProduct}=props;
    return(
    
        <div>
           <img src={product.image_url}/>
           <span>{product.name}</span>
           <span>{product.price}</span>
           <button onClick={()=>{deleteProductFn(product.product_id)}}>Delete</button>
           <button onClick={()=>{setSelectedProduct(product)}}>Edit</button>
        </div>
    )

};

export default Product;