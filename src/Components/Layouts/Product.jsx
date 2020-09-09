import React from 'react'
import '../../CSS/product.css'
import StarIcon from '@material-ui/icons/Star'
import { colors } from '@material-ui/core'

const Product = ({ title, image, price, rating, id }) => {
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
                            <StarIcon style={{ color: '#f0c14b' }} />
                        ))}
                </div>
                <img src={image} alt="product_image" />
                <button>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
