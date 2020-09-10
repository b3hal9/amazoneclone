import React from 'react'
import '../../CSS/product.css'
import StarIcon from '@material-ui/icons/Star'

// import { useStateValue } from '../StateProver'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../redux/actions/addCartAction'

const Product = ({ title, image, price, rating, id }) => {
    const dispatch = useDispatch()
    const addToBasket = () => {
        //dispatch the item into the data layer

        dispatch(
            addItemToCart({
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            })
        )
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
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
                <img src={image} alt="product_image" />
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
