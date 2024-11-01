# Satoshi Calculator

A simple REST API to convert a value in Brazilian Reais (BRL) to satoshis, the smallest unit of Bitcoin. The API fetches the current Bitcoin value and performs the conversion. 

## Features

- **Convert BRL to Satoshis**: Based on the current Bitcoin exchange rate, converts a specified amount in BRL to satoshis.
- **Error Handling**: Validates input and provides meaningful error messages.

## Prerequisites

- **Node.js**: v12 or higher
- **NPM**: Installed with Node.js
- **Dependencies**:
  - `express`: For setting up the API server
  - `axios`: For fetching the BTC price
  - `nodemon`: For easier development and automatic restarts

## Installation

Clone the repository and install dependencies:

## Endpoints

`POST /to-satoshi`

Body example:
`{
  "value": "5"
}`

Response successful (200 Ok): `The final value of your purchase is x.x satoshis!`

Error (400 Bad Request): `It's not possible to convert to satoshis. Try again!`

## Explanation
```bash
git clone https://github.com/pedrjose/satoshi-calculator
cd satoshi-calculator
npm install
npm start
