import { Box, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import InputAmout from './InputAmout';
import SelectCountry from './SelectCountry';
import { database } from '@/firebase/firebase';
import Link from 'next/link';
import { countryData } from '@/lib/constants/currenciesData';
import useCurrencyRates from '@/lib/hooks/useCurrencyRates';

const Calculator = () => {
  const defaultCurrency = countryData.find((item) => item.currency === 'RUB'); // Default currency
  const { currencyRates, mapCurrencyToRate } = useCurrencyRates(); // Hook for mapping currency codes to rates and fetching the rates
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currency, setCurrency] = useState(defaultCurrency);

  const boxStyles = {
    background: '#fdfdfd',
    marginTop: '5%',
    marginBottom: '10%',
    textAlign: 'center',
    color: '#222',
    minHeight: '20rem',
    borderRadius: 2,
    padding: '3.5rem 2rem',
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
        const fromRate = mapCurrencyToRate(currency.currency);
        const converted = parseFloat(amount) * fromRate;
        setConvertedAmount(converted.toFixed(2));
      } else {
        setConvertedAmount(null);
      }
    }
  }, [amount, currency, currencyRates]);

  const handleWhatsAppClick = () => {
    const message = `Здравствуйте!\nХочу обменять ${amount} ${currency.currency}
    \nИз: ${currency.currency}\nВ: ${currency.to}\nСумма в ${currency.to}: ${convertedAmount}`;
    const whatsappUrl = `https://wa.me/79520042864?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <Container maxWidth='sm' sx={boxStyles}>
      <Grid container spacing={2}>
        <InputAmout amount={amount} setAmount={setAmount} currency={currency} />
        <SelectCountry
          value={currency}
          setValue={setCurrency}
          label='Валюта'
          countryData={countryData}
        />
        {/* <SwitchCurrency /> */}
        {/* <SelectCountryTHB
          value={toCurrency}
          setValue={setToCurrency}
          label='В'
          thbData={thbCountryData}
        /> */}
      </Grid>
      <Box sx={{ textAlign: 'left', marginTop: '1rem', minHeight: '2rem' }}>
        <Typography
          variant='h6'
          sx={{
            marginBottom: '5px',
            fontWeight: 'bold',
            color: 'black',
            fontFamily: 'Involve, sans-serif',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ marginBottom: '5px' }}>Итого:&nbsp;</span>
          <span>
            {amount} {currency.currency} ={' '}
            {convertedAmount ? convertedAmount : '0.00'} {currency.to}
          </span>
        </Typography>

        <div className='calc-title mt-3'>
          <span className='calc-subtitle'>
            Высокая скорость обработки заявок и уверенность в каждой операции
          </span>
        </div>
      </Box>

      <div className='text-center text-md-left d-flex flex-column flex-md-row justify-content-between mt-3 gap-4 gap-md-4'>
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
