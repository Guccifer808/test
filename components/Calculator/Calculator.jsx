import { Box, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import InputAmout from './InputAmout';
import SelectCountry from './SelectCountry';
import SwitchCurrency from './SwitchCurrency';

import { getDatabase, ref, get } from 'firebase/database';
import { database } from '@/firebase/firebase';
import SelectCountryTHB from './SelectCountryTHB';

const flagUSA = '/img/icon/us.png';
const flagEUR = '/img/icon/eu.png';
const flagRU = '/img/icon/ru.png';
const flagTH = '/img/icon/th.png';

const countryData = [
  { name: '$', flag: flagUSA, currency: 'USD' },
  { name: '€', flag: flagEUR, currency: 'EUR' },
  { name: '₽', flag: flagRU, currency: 'RUB' },
];
const thbCountryData = [{ name: '฿', flag: flagTH, currency: 'THB' }];

const Calculator = () => {
  const [amount, setAmount] = useState('');
  const [currencyRates, setCurrencyRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(null);
  const defaultFromCurrency = countryData[0]; // Default to the first currency in the array

  const [fromCurrency, setFromCurrency] = useState(defaultFromCurrency);
  const [toCurrency, setToCurrency] = useState({
    name: '฿',
    flag: flagTH,
    currency: 'THB',
  });
  // Fetch currency rates from Firebase on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const dbRef = ref(db, 'currencyRates');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          setCurrencyRates(snapshot.val());
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching currency rates:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('Currency Rates:', currencyRates);

    if (Object.keys(currencyRates).length > 0) {
      console.log('From Currency Rate:', currencyRates[fromCurrency.currency]);

      if (amount) {
        const fromRate = mapCurrencyToRate(fromCurrency.currency);
        const converted = parseFloat(amount) * fromRate;
        setConvertedAmount(converted.toFixed(2));
      } else {
        setConvertedAmount(null);
      }
    }
  }, [amount, fromCurrency, currencyRates]);

  console.log('convertedAmount', convertedAmount);
  console.log('amount', amount);
  // Function to map currency codes to rates
  const mapCurrencyToRate = (currencyCode) => {
    // Check if the currency code exists in the currencyRates object
    if (currencyRates.hasOwnProperty(currencyCode)) {
      // Retrieve the rate from currencyRates object using the currency code
      return currencyRates[currencyCode];
    } else {
      // Return a default value or handle the case where the currency code is not found
      return null; // You can return null, 0, or any other default value based on your use case
    }
  };

  const boxStyles = {
    background: '#fdfdfd',
    marginTop: '10%',
    marginBottom: '10%',
    textAlign: 'center',
    color: '#222',
    minHeight: '20rem',
    borderRadius: 2,
    padding: '4rem 2rem',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    position: 'relative',
  };

  return (
    <Container maxWidth='md' sx={boxStyles}>
      <Typography variant='h5' sx={{ marginBottom: '2rem', color: 'black' }}>
        Заголовок калькулятора
      </Typography>
      <Grid container spacing={2}>
        <InputAmout
          amount={amount}
          setAmount={setAmount}
          currency={fromCurrency}
        />
        <SelectCountry
          value={fromCurrency}
          setValue={setFromCurrency}
          label='Из'
          countryData={countryData}
        />
        <SwitchCurrency />
        <SelectCountryTHB
          value={toCurrency}
          setValue={setToCurrency}
          label='В'
          thbData={thbCountryData}
        />
      </Grid>

      {convertedAmount !== null && (
        <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
          <Typography
            variant='h6'
            sx={{ marginBottom: '5px', fontWeight: 'bold', color: 'black' }}
          >
            {amount} {fromCurrency.name} ({fromCurrency.currency}) ={' '}
            {convertedAmount} {toCurrency.name} ({toCurrency.currency})
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Calculator;
