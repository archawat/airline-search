# Fuzzy Search for IATA Codes

This package offers a fuzzy search function optimized for searching IATA codes and airline names within a dataset.It is particularly useful for applications needing to match partial search queries to the closest IATA code in a list of airlines.

## Installation

Install the package by running:

```bash
npm install airline-search
```

### Usage
#### ES Modules
```
import { searchCode } from 'airline-search';
```
#### CommonJS
```
const { searchCode } = require('airline-search');
```

#### Sample Code
```
// Searching for an airline using a partial name
const searchTerm = "Emirates"; // Emirates Airlines
const iataCode = searchCode(searchTerm);

console.log(`The IATA code for '${searchTerm}' is: ${iataCode}`);
// Expected output might be: "The IATA code for 'Emirates' is: EK"
```
