import express from 'express';
import Midtrans from 'midtrans-client';

const router = express.Router();

const snap = new Midtrans.Snap({
        isProduction: process.env.VITE_IS_PRODUCTION,
        serverKey: process.env.VITE_SERVER_KEY,
        clientKey: process.env.VITE_CLIENT_KEY
})

router.post('/', async (req, res) => {
        const { id, name, price, quantity } = await req.body;
        let parameter = {
                item_details : {
                        name: name,
                        price: price,
                        quantity: quantity
                }, 
                transaction_details : {
                        order_id: id,
                        gross_amount: price * quantity
                }
        }

        const token = await snap.createTransactionToken(parameter);
        res.json({ token });

})

export default router;