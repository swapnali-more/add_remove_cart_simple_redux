import React from 'react';
import phone from "../iphone.jpg";

const Home = ({ addToCartHandler, removeToCartHandler, cartData }) => {
    console.log("Home", cartData);
    return (
        <>
            <h2>Home Components</h2>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={phone} alt="I-Phone" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => addToCartHandler({ price: 1000, name: "I-Phone" })}>
                        Add To Cart
                    </button>
                    {cartData.length > 0 && (
                        <button className="remove-cart" onClick={() => removeToCartHandler()}>
                            Remove To Cart
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};


export default Home;
