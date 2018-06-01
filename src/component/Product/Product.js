import React from 'react';

const Product =(props) => {


    const{imageUrl, name, price, deleteProductFn, productId}=props;
    return(
    
        <div>
           <img src={imageUrl}/>
           <span>{name}</span>
           <span>{price}</span>
           <button onClick={()=>{deleteProductFn(productId)}}>Delete</button>
        
        </div>
    )

};

export default Product;