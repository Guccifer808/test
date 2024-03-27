import { Box, Container, Grid, Link, Typography } from '@mui/material';
// import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CurrencyContext } from '@/context/CurrencyContext';
import InputAmout from './InputAmout';
import SelectCountry from './SelectCountry';
import SwitchCurrency from './SwitchCurrency';

const Calculator = () => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext);
  const [resultCurrency, setResultCurrency] = useState(0);
  // const codeFromCurrency = fromCurrency.split(' ')[1];
  // const codeToCurrency = toCurrency.split(' ')[1];

  const boxStyles = {
    background: '#fdfdfd',
    marginTop: '10%',
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
        Заголовок
      </Typography>
      <Grid container spacing={2}>
        <InputAmout />
        <SelectCountry
          value={fromCurrency}
          setValue={setFromCurrency}
          label='From'
        />
        <SwitchCurrency />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label='To' />
      </Grid>

      {firstAmount ? (
        <Box sx={{ textAlign: 'left', marginTop: '1rem' }}>
          <Typography>
            {firstAmount} {fromCurrency} =
          </Typography>
          <Typography
            variant='h5'
            sx={{ marginTop: '5px', fontWeight: 'bold' }}
          >
            {resultCurrency * firstAmount} {toCurrency}
          </Typography>
        </Box>
      ) : (
        ''
      )}
    </Container>
  );
};

export default Calculator;
