import React from 'react'
import '../../CSS/subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'

const Subtotal = () => {
    const data = useSelector((store) => store.cart)

    console.log(data)
    const { items } = data
    const totalprice = items.reduce((amount, item) => item.price + amount, 0)

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({items.number || 0} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={totalprice}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
