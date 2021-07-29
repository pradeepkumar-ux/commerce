import React from 'react';
import Product from './Product';


function Main(props) {
    const {products,onAdd}  = props;

    return(
       <main className="block col-2">
           <h2>products</h2>
           <select>
               <option>available</option>
               <option>fruits</option>
               <option> Vegetables</option>
           </select>
           <div className="row"></div>
           {products.map((product) => (
               <Product key={product.id} product={product} onAdd={onAdd}></Product>
           ))}
       </main>
    )
}

export default Main;