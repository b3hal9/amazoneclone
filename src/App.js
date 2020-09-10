import React from 'react'
import './CSS/App.css'
import Main from './Components/Main'

import store from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Main />
            </div>
        </Provider>
    )
}

export default App
