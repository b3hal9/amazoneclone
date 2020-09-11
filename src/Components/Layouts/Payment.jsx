import React from 'react'
import '../../CSS/payment.css'
import { useSelector } from 'react-redux'
import CheckoutProducts from '../Layouts/CheckoutProducts'
import { Link } from 'react-router-dom'

import CurrencyFormat from 'react-currency-format'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from '@material-ui/core'

const Payment = () => {
    const user = useSelector((store) => store.user.user)

    const data = useSelector((store) => store.cart)

    const { items } = data
    const totalprice = items.reduce((amount, item) => item.price + amount, 0)

    const makePayment = (token) => {
        const body = {
            token: user.email,
            items,
        }
        const headers = {
            'Content-Type': 'application.json',
        }
        return fetch(`http://localhost:5000/payment`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        })
    }
    return (
        <div className="payment__container">
            <h1>
                Checkout (
                <Link to="/checkout">
                    {items?.length} {''}items
                </Link>
                )
            </h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {items.map((item) => (
                        <CheckoutProducts
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    <div className="payment__priceContainer">
                        <CurrencyFormat
                            renderText={(value) => (
                                <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={totalprice}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                        />
                    </div>
                    <StripeCheckout
                        stripeKey={process.env.CLIENT_PUBLIC_KEY}
                        token={makePayment}
                        name="StipePay"
                    >
                        <Button className="btn">Buy Now</Button>
                    </StripeCheckout>
                </div>
            </div>
        </div>
    )
}

export default Payment
