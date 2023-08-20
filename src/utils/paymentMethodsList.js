import {v4 as uuidv4} from 'uuid';

let myuuid = uuidv4();

const PAYMENT_METHODS = [
    {
        _id: myuuid,
        paymentType: 'Credit Cards'
    },
    {
        _id: myuuid,
        paymentType: 'Debit Cards'
    },
    {
        _id: myuuid,
        paymentType: 'PayPal'
    },
    {
        _id: myuuid,
        paymentType: 'Cryptocurrencies'
    },
    {
        _id: myuuid,
        paymentType: 'Bank Transfer'
    },
    {
        _id: myuuid,
        paymentType: 'Mobile Wallets'
    },
    {
        _id: myuuid,
        paymentType: 'Cash Payment'
    },
    {
        _id: myuuid,
        paymentType: 'Wire Transfer'
    }
]

export default PAYMENT_METHODS