import React from 'react'
import { Header } from './Base/Header'
import HomePage from './Base/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Layouts/Checkout'

const Main = (props) => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
            </div>
        </Router>
    )
}

export default Main
