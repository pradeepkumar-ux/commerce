import React, { Fragment } from 'react'

export default function Product(props) {
    const {product,onAdd} = props;
    let stock = 'Out-Stock';
    if(product.available !== 0){
        stock = 'in  Stock';
    }

    return (
        <Fragment>
        <div className="fix">
           
            <img className="small" src={product.image} alt ={product.name}></img>
            <h3>{product.name}</h3>
            <div>RS {product.price}</div>
            <div className="available" >Available: {product.available}</div>
            <div className="cat">{product.category}</div>
            <div className="vendor">{product.vendor}</div>
            <div>{stock}</div>
            
            <div className="row">
                {product.available !== 0 &&  <button className="btn1"  onClick={() => onAdd(product)}>Add To Cart</button> }
                
            </div>
            
        </div>
        </Fragment>
    )
}
