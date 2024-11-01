import express from "express";

import { getBtcValue } from "./service.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.post("/to-satoshi", async (req, res) => {
  try {
    const { value } = req.body;

    if (!value)
      throw new Error("It's not possible convert to satoshis. Try again!");

    const btcValue = await getBtcValue();

    const valueToBtc = parseInt(value) / btcValue;
    const btcToSatoshis = valueToBtc * 100000000;

    const satoshis = (btcToSatoshis / 1000).toFixed(1);

    res.send(`The final value of your purchase is ${satoshis} satoshis!`);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(port, () =>
  console.log(`\nSATOSHI CALCULATOR WORKS ON ${port} PORT!`)
);