import React, { useState } from 'react'
import '../../CSS/login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../Config/Firebase'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch((error) => alert(error.message))
    }

    const signUp = (e) => {
        e.preventDefault()
        console.log(email, password)
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                    className="login__logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={signIn}
                        className="login_Button"
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON Conditions of Use &
                    Sale. Please see our Privacy Notice, our cookies Notice and
                    our Interest_Based Ads Notice.
                </p>
                <button onClick={signUp} className="Signup_Button">
                    Create Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
