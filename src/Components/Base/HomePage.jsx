import React from 'react'
import '../../CSS/home.css'
import Product from '../Layouts/Product'

const HomePage = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                    alt="coverimage"
                />
                <div className="productCards">
                    <div className="home__row">
                        <Product
                            id="0001"
                            title="Leather Bag"
                            price={19.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/91Hy5yHBr1L._AC_SL1500_.jpg"
                            rating={5}
                        />
                        <Product
                            id="0002"
                            title="Lg monitor 14 ich. Super OLED FHD+ resolution, response time 1ms, HDR 10 support"
                            price={119.99}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="0003"
                            title="Asus Laptop"
                            price={668.99}
                            rating={3}
                            image="https://images-na.ssl-images-amazon.com/images/I/81o8Tll-5-L._AC_SY450_.jpg"
                        />
                        <Product
                            id="0004"
                            title="Lg webcam"
                            price={60}
                            rating={5}
                            image="data:image/webp;base64,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"
                        />
                        <Product
                            id="0005"
                            title="Samsung ssd"
                            price={190.45}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/91JA5-hAnoL._AC_SX450_.jpg"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="0006"
                            title="Asus Laptop"
                            price={668.99}
                            rating={3}
                            image="https://m.media-amazon.com/images/I/51XP3xgzPML._AC_UY327_FMwebp_QL65_.jpg"
                        />
                        <Product
                            id="0007"
                            title="Lg webcam"
                            price={60}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/71SQSraI7rL._AC_UY327_FMwebp_QL65_.jpg"
                        />
                        <Product
                            id="0008"
                            title="Samsung ssd"
                            price={190.45}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/71lVo9Y3nnL._AC_UY327_FMwebp_QL65_.jpg"
                        />
                        <Product
                            id="0009"
                            title="Samsung ssd"
                            price={190.45}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/81+tv715ZFL._AC_UY327_FMwebp_QL65_.jpg"
                        />
                        <Product
                            id=" 00010"
                            title="Samsung ssd"
                            price={190.45}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/61k+Wn99SdL._AC_UY327_FMwebp_QL65_.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
