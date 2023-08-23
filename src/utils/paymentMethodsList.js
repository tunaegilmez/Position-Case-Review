import { v4 as uuidv4 } from "uuid";

const PAYMENT_METHODS = [
  {
    _id: uuidv4(),
    paymentType: "Credit Cards",
  },
  {
    _id: uuidv4(),
    paymentType: "Debit Cards",
  },
  {
    _id: uuidv4(),
    paymentType: "PayPal",
  },
  {
    _id: uuidv4(),
    paymentType: "Cryptocurrencies",
  },
  {
    _id: uuidv4(),
    paymentType: "Bank Transfer",
  },
  {
    _id: uuidv4(),
    paymentType: "Mobile Wallets",
  },
  {
    _id: uuidv4(),
    paymentType: "Cash Payment",
  },
  {
    _id: uuidv4(),
    paymentType: "Wire Transfer",
  },
];

export default PAYMENT_METHODS;