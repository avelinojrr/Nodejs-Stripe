import Stripe from "stripe"
import {STRIPE_APY_SECRET} from "../config.js"

const stripe = new Stripe(STRIPE_APY_SECRET)
export const checkoutPay = async (req, res) => {
    await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Macbook Pro 2022',
                        description: 'Macbook Pro 2022 1TB SSD 32GB RAM 16 inch display Chip M2',
                        images: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664497359481'],
                    },
                    unit_amount: 120000, // Cents 1200 USD
                },
                quantity: 2,
            },
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Airpods Pro',
                        description: 'Airpods Pro 2021 with noise cancellation and spatial audio',
                        images: ['https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604709293000'],
                    },
                    unit_amount: 45000, // Cents 450 USD
                },
                quantity: 1,
            }
        ],
        mode: 'payment',
        success_url: 'http://localhost:7090/success',
        cancel_url: 'http://localhost:7090/failed',
    }).then((session) => {
        res.json({ url: session.url })
    })
}

export const successPay = (req, res) => res.redirect('/success.html')

export const failedPay = (req, res) => res.redirect('/failed.html')