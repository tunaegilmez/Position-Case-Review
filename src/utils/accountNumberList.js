import { v4 as uuidv4 } from "uuid";

const ACCOUNT_NUMBERS = [
  {
    _id: uuidv4(),
    caption: "Mandant",
    account_number: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
  },
  {
    _id: uuidv4(),
    caption: "Test Firma",
    account_number: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
  },
  {
    _id: uuidv4(),
    caption: "Digitastic",
    account_number: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
  },
  {
    _id: uuidv4(),
    caption: "Company Name Test",
    account_number: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
  },
  {
    _id: uuidv4(),
    caption: "Company Name",
    account_number: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
  },
];

export default ACCOUNT_NUMBERS;
