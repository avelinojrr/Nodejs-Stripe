import { Router } from "express";
import { checkoutPay, failedPay, successPay } from "../controllers/payment.controllers.js";

const router = Router();

router.post('/create-checkout-session', checkoutPay);

router.get('/success', successPay);

router.get('/failed', failedPay);


export default router;