import React, { useEffect } from 'react'
import { Header } from './Base/Header'
import HomePage from './Base/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Layouts/Checkout'
import Login from './Auth/Login'
import { useDispatch } from 'react-redux'
import { auth } from '../Config/Firebase'
import { addUser, deleteUser } from '../redux/actions/userAction'
import Payment from './Layouts/Payment'

const Main = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                //login
                dispatch(addUser(authUser))
            } else {
                //logout
                dispatch(deleteUser(authUser))
            }
        })
    })
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/payment">
                        <Header />
                        <Payment />
                    </Route>
                    <Route exact path="/">
                        <Header />
                        <HomePage />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Main
