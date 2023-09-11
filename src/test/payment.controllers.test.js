// generate some tests using mocha and chai, importing the controllers we already created

import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import { checkoutPay, failedPay, successPay } from '../controllers/payment.controllers.js';

chai.use(chaiHttp);
chai.should();

describe('Payment', () => {
    describe('Checkout', () => {
        it('should return a checkout url', async () => {
            const req = {
                body: {
                    payment_method_types: ['card'],
                    line_items: [
                        {
                            price_data: {
                                currency: 'usd',
                                product_data: {
                                    name: 'MacBook Pro 2022',
                                    description: 'MacBook Pro 2022 1TB SSD 32GB RAM 16 inch display Chip M2',
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
                                    name: 'AirPods Pro',
                                    description: 'AirPods Pro 2021 with noise cancellation and spatial audio',
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
                }
            }
            const res = {
                json: (data) => data
            }
        })
    })
    describe('Success', () => {
        it('should return a redirect to success.html', () => {
            const req = {}
            const res = {
                redirect: (url) => url
            }
            const result = successPay(req, res);
            result.should.be.a('string');
            result.should.be.equal('/success.html');
        })
    })
    describe('Failed', () => {
        it('should return a redirect to failed.html', () => {
            const req = {}
            const res = {
                redirect: (url) => url
            }
            const result = failedPay(req, res);
            result.should.be.a('string');
            result.should.be.equal('/failed.html');
        })
    })
});