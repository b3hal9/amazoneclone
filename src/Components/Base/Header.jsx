import React from 'react'
import '../../CSS/header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { auth } from '../../Config/Firebase'

export const Header = () => {
    const dataNumber = useSelector((store) => store.cart.items)
    const user = useSelector((store) => store.user.user)

    const handleAuth = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img
                    id="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne">
                            {user ? 'Hello' + user?.email : 'Hello Guest'}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? `SignOut` : `SignIn`}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {dataNumber.length || 0}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
