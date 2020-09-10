import React from 'react'
import '../../CSS/checkout.css'
import Subtotal from './Subtotal'
import { useSelector } from 'react-redux'
import CheckoutProducts from './CheckoutProducts'

const Checkout = () => {
    const data = useSelector((store) => store.cart)
    const { items } = data
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.brafton.com%2Fwp-content%2Fuploads%2F2011%2F11%2Fbannerad.png&f=1&nofb=1"
                    alt="add_banner"
                    className="checkout__ad"
                />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {items.map((item) => (
                        <CheckoutProducts
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    {/* items */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
