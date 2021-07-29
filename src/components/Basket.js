import React from 'react';


function Basket(props) {
    const {cartItems,onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a+c.price *c.qty,0);
    const taxPrice =itemsPrice * 0.14;
    const shippingPrice =itemsPrice > 2000 ? 0: 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return(
       <aside className="block col-1">
           <h2>Cart items</h2>
           <div>
               {cartItems.length === 0 && <div> Cart is Empty</div>}
               {cartItems.map((item) => (
                   <div key={item.id} className="row">
                       <div className="col-2">{item.name}</div>
                       <div className="col-2">
                           <button id="bt4" onClick={() => onAdd(item)} className="add" >+</button>
                           <button id="bt3" onClick={() => onRemove(item)} className="remove">-</button>

                       </div>
                       <div className="col-2 text-right">
                           {item.qty} x Rs {item.price.toFixed(2)}
                       </div>
                   </div>

               ))}
               {cartItems.length !== 0 && (
                   <>
                   <hr></hr>
                   <div className="row">
                       <div className="col-2"> Items Price</div>
                       <div className="col-1 text-right">RS{itemsPrice.toFixed(2)}</div>
                   </div>
                   <div className="row">
                       <div className="col-2"> Tax Price</div>
                       <div className="col-1 text-right">RS{taxPrice.toFixed(2)}</div>
                   </div>
                   <div className="row">
                       <div className="col-2"> Shipping Price</div>
                       <div className="col-1 text-right">RS{shippingPrice.toFixed(2)}</div>
                   </div>
                   <div className="row">
                       <div className="col-2"> Total Price</div>
                       <div className="col-1 text-right">RS{totalPrice.toFixed(2)}</div>
                   </div>


                   </>
               )}
           </div>
           <hr/>
           <div >
               <button className="btn" onClick={() => alert('your purchase successfull')}> CheckOut</button>
           </div>
       </aside>
    
    )
}

export default Basket;