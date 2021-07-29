import React from 'react';


function Header(props) {
    const {countCartItems} = props;

    return(
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>E-commerce </h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    cart
                    {' '}
                    {countCartItems ?  (
                        <button className="badge">{countCartItems}</button>
                    ):('')
                    }
                    </a>  <a href="#/signin">signIn</a>
                    
            </div>
        </header>
    )
}

export default Header;