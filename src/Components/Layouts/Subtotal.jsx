import React from 'react'
import '../../CSS/subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'

const Subtotal = () => {
    const items = useSelector((state) => state.items)
    // console.log(items)

    // const TotalPrice = items.foreach((item) => {
    //     let s = 0
    //     s += item.price
    // })

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({0} items):
                            <strong>{0}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
