import React from 'react'
import '../../CSS/checkoutproduct.css'
import StarIcon from '@material-ui/icons/Star'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from '../../redux/actions/addCartAction'

const CheckoutProducts = ({ id, image, title, price, rating }) => {
    const dispatch = useDispatch()
    const deleteProduct = () => {
        dispatch(deleteFromCart(id))
    }
    return (
        <div className="checkoutProduct">
            <img
                src={image}
                alt="productImage"
                className="checkoutProduct__image"
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon
                                style={{
                                    color: '#f0c14b',
                                    marginBottom: '30px ',
                                }}
                            />
                        ))}
                </div>
                <button onClick={deleteProduct}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProducts
