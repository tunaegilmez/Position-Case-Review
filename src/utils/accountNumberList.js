import {v4 as uuidv4} from 'uuid';

let myuuid = uuidv4();

const randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

const ACCOUNT_NUMBERS = [
    {
        _id: myuuid,
        caption: "Mandant",
        account_number: randomNumber,
      },
      {
        _id: myuuid,
        caption: "Test Firma",
        account_number: randomNumber,
      },
      {
        _id: myuuid,
        caption: "Digitastic",
        account_number: randomNumber,
      },
      {
        _id: myuuid,
        caption: "Company Name Test",
        account_number: randomNumber,
      },
      {
        _id: myuuid,
        caption: "Company Name",
        account_number: randomNumber,
      },
]

export default ACCOUNT_NUMBERS