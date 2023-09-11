import { Router } from "express";
import { checkoutPay } from "../controllers/payment.controllers.js";

const router = Router();

router.post('/create-checkout-session', checkoutPay);

router.get('/success',(req, res) => res.redirect('/success.html'));

router.get('/failed', (req, res) => res.redirect('/failed.html'));

export default router;