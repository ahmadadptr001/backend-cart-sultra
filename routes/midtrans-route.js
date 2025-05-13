import express from 'express';
import Midtrans from 'midtrans-client';

const router = express.Router();

const snap = new Midtrans.Snap({
        isProduction: process.env.IS_PRODUCTION,
        serverKey: process.env.SERVER_KEY,
        clientKey: process.env.CLIENT_KEY
})

router.get('/', (req, res) => {
        res.json({ message: 'server aktif' })
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