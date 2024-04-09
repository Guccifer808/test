import { Box, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import InputAmout from './InputAmout';
import SelectCountry from './SelectCountry';
import SwitchCurrency from './SwitchCurrency';
import { database } from '@/firebase/firebase';
import SelectCountryTHB from './SelectCountryTHB';
import Link from 'next/link';
import {
  countryData,
  flagTH,
  thbCountryData,
} from '@/lib/constants/currenciesData';
import useCurrencyRates from '@/lib/hooks/useCurrencyRates';

const Calculator = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const defaultFromCurrency = countryData[2]; // Default currency
  const { currencyRates, mapCurrencyToRate } = useCurrencyRates(); // Hook for mapping currency codes to rates and fetching the rates

  const [fromCurrency, setFromCurrency] = useState(defaultFromCurrency);
  const [toCurrency, setToCurrency] = useState({
    name: '฿',
    flag: flagTH,
    currency: 'THB',
  });

  const boxStyles = {
    background: '#fdfdfd',
    marginTop: '5%',
    marginBottom: '10%',
    textAlign: 'center',
    color: '#222',
    minHeight: '20rem',
    borderRadius: 2,
    padding: '4rem 2rem',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    position: 'relative',
    '& .MuiFormLabel-root': {
      color: '#564dca', // Color when focused
      '&.Mui-focused': {
        color: '#564dca', // Color when focused
      },
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#564dca',
      },
    },
  };

  useEffect(() => {
    if (Object.keys(currencyRates).length > 0) {
      if (amount) {
        const fromRate = mapCurrencyToRate(fromCurrency.currency);
        const converted = parseFloat(amount) * fromRate;
        setConvertedAmount(converted.toFixed(2));
      } else {
        setConvertedAmount(null);
      }
    }
  }, [amount, fromCurrency, currencyRates]);

  const handleWhatsAppClick = () => {
    const message = `Здравствуйте!\nХочу обменять ${amount} ${fromCurrency.currency}\nИз: ${fromCurrency.currency}\nВ: ${toCurrency.currency}\nСумма в THB: ${convertedAmount} ${toCurrency.currency}`;
    const whatsappUrl = `https://wa.me/79520042864?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Container maxWidth='md' sx={boxStyles}>
      <Typography
        variant='h5'
        sx={{
          marginBottom: '2rem',
          color: 'black',
          fontFamily: 'Involve, sans-serif',
        }}
      >
        высокая скорость обработки заявок и уверенность в каждой операции
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

      <Box sx={{ textAlign: 'center', marginTop: '1rem', minHeight: '2rem' }}>
        <Typography
          variant='h6'
          sx={{
            marginBottom: '5px',
            fontWeight: 'bold',
            color: 'black',
            fontFamily: 'Involve, sans-serif',
          }}
        >
          {amount} {fromCurrency.currency} ={' '}
          {convertedAmount ? convertedAmount : '0.00'} {toCurrency.currency}
        </Typography>
      </Box>

      <div className='text-center text-md-left d-flex flex-column flex-md-row justify-content-center mt-4 gap-4 gap-md-5'>
        <Link
          href='https://t.me/fastmoneyphuket'
          className='btn btn-tg'
          target='_blank'
          rel='noreferrer'
        >
          Обменять в Telegram <i className='fab fa-telegram-plane'></i>
        </Link>

        <Link
          href='https://wa.me/79520042864'
          className='btn btn-wa'
          target='_blank'
          rel='noreferrer'
          onClick={handleWhatsAppClick}
        >
          Обменять в WhatsApp <i className='fab fa-whatsapp'></i>
        </Link>
      </div>
    </Container>
  );
};

export default Calculator;
