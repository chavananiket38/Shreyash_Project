import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import StripeCheckout from "react-stripe-checkout";
import { API } from "../backend";
import { createOrder } from "./helper/orderHelper";


const StripeGateway = ({products, 
    setReload = f => f, 
    reload=undefined}) => {
    
    const [data, setData] = useState({
        loading: false,
        success: false,
        error: "",
        address: ""
    })
    const [status, setStatus] = useState(false);
    
    const token = isAutheticated() && isAutheticated().token;
    const userId = isAutheticated() && isAutheticated().user._id; 

    const getFinalPrice = () => {
        let amount = 0;
        products.map(p => {
            amount = amount + p.price;
        })
        return amount;
    }

    const placeOrder = () => {
        const orderData = {
            products: products,
            transaction_id: {}, 
            amount: getFinalPrice()
        }
        createOrder(userId, token, orderData);
        setStatus(true);
    }

    const makePayment = token => {
        const body = {
            token, 
            products
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return fetch(`${API}/stripepayment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log(response)
            
        }).catch(error => {
            
            console.log(error)
        })
    }

    const showStripeButton = () => {
        return isAutheticated() ? (
            <div>          
                <StripeCheckout 
                stripeKey="pk_test_51MIySySAYMhNFKaFH6kgI0Q910G2BwJhdmhPp4ihCze3ZhvqU1yX5itJ9S54iYpFpSss3Y9PgLFCa2aT9ZE22eyn00ur6YAxja"
                token={makePayment}
                amount={getFinalPrice() }
                name="Proceed to checkout"
                shippingAddress
                billingAddress
            >
                <button className="btn btn-success">Pay with stripe</button>
            </StripeCheckout>
                <button className="btn btn-success" onClick={placeOrder}>Pay with COD</button>
                <div className="row" style={{marginTop: "10px"}}>
                    <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-success"
                        style={{ display: status ? "" : "none" }}
                    >
                        Order has been placed successfully. Go to 
                        <Link to="/ecommerce">  Store </Link> page
                    </div>
                    </div>
                </div>
            </div>
        ) : (
            <Link to="/signin">
                <button className="btn btn-warning" style={{paddingLeft: "10px"}}>Signin</button>
            </Link>
        )
    }

    
    return(
        <div>
            <h3 className="text-white">Checkout</h3>
            <h4 className="text-white">Total price = {getFinalPrice()}</h4>
            {showStripeButton()}
        </div>
    )
}



export default StripeGateway;