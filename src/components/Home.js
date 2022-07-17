import React from 'react';
import phone from "../iphone.jpg";

const Home = (props) => {
    console.log("Home",props)
    return (
        <>
        <h2>Home Components</h2>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src={phone} />
            </div>
            <div className="text-wrapper item">
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className="btn-wrapper item">
                <button onClick={() => props.addToCartHandler({price: 1000, name: "I-Phone"})}>
                    Add To Cart</button>
                {props.cartData.length > 0 && 
                <button className='remove-cart' onClick={() => props.removeToCartHandler()}>
                    Remove To Cart</button>}
            </div>
        </div>
        </>
    )
}

export default Home;
