const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const stripe = require('stripe')(process.env.FIREBASE_SECRET)
const app = express()
app.use(express.json())

app.use(cors({ origin: true }))

app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payment', (req, res) => {
    const amount = 2000
    const { token, items } = req.body

    stripe.customers
        .create({
            email: token.email,
            source: req.body.stripeToken,
        })
        .then((customer) =>
            stripe.charges.create({
                amount,
                description: 'Cooliest T-Merch in Planet.',
                currency: 'usd',
                receipt_email: token.email,
                customer: customer.id,
            })
        )
        .then((data) => res.render('success', { data: data }))
        .catch((err) => console.log(err.message))
})
const server = app.listen(5000, () => console.log('server is running '))
//listen command
exports.api = functions.https.onRequest(server)
