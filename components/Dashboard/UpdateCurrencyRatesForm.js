import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '@/firebase/firebase';

const UpdateCurrencyRatesForm = () => {
  const [currencyRates, setCurrencyRates] = useState({});
  const [currencyCode, setCurrencyCode] = useState('');
  const [rate, setRate] = useState('');

  // Get current rates from the database
  useEffect(() => {
    const currencyRatesRef = ref(database, 'currencyRates');
    onValue(currencyRatesRef, (snapshot) => {
      if (snapshot.exists()) {
        setCurrencyRates(snapshot.val());
      }
    });
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get a reference to the database node
      const currencyRef = ref(database, 'currencyRates/' + currencyCode);

      // Update the currency rate in the database
      await set(currencyRef, parseFloat(rate));

      // Reset the form inputs after successful update
      setCurrencyCode('');
      setRate('');
    } catch (error) {
      console.error('Error updating currency rate:', error.message);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'center',
        marginTop: '15%',
        '@media (max-width: 768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Typography
          variant='h6'
          gutterBottom
          sx={{
            color: 'black',
            '@media (max-width: 768px)': {
              textAlign: 'center',
            },
          }}
          textAlign='left'
        >
          Текущие курсы валют
        </Typography>
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'black',
          }}
        >
          {Object.entries(currencyRates).map(([currency, rate]) => (
            <ListItem key={currency}>
              <ListItemText primary={`${currency}: ${rate}`} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          width: '100%',
          '& .MuiFormLabel-root': {
            '&.Mui-focused': {
              color: '#564dca',
            },
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#564dca',
            },
          },
        }}
      >
        <Typography
          variant='h6'
          gutterBottom
          sx={{ color: 'black' }}
          textAlign='center'
        >
          Обновить курс валют
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id='currencyCode-label'>Валюта</InputLabel>
            <Select
              labelId='currencyCode-label'
              id='currencyCode'
              value={currencyCode}
              label='Валюта'
              onChange={(e) => setCurrencyCode(e.target.value)}
            >
              <MenuItem value='EUR'>EUR</MenuItem>
              <MenuItem value='USD'>USD</MenuItem>
              <MenuItem value='RUB'>RUB</MenuItem>
              {/* Add other currencies as needed */}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            id='rate'
            label='Курс'
            variant='outlined'
            type='number'
            value={rate}
            // onChange={(e) => setRate(e.target.value)}
            onChange={(e) => {
              const { value } = e.target;
              // Check if the entered value is a non-negative number
              if (!isNaN(value) && parseFloat(value) >= 0) {
                // Update the rate state only if it's a non-negative number
                setRate(value);
              }
            }}
            sx={{ marginBottom: 2 }}
          />
          <Box textAlign='center'>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              sx={{
                backgroundColor: '#564dca',
                border: '1px solid #564dca',
                borderRadius: '70px',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'black',
                  border: '1px solid #564dca',
                },
              }}
            >
              Обновить Курс
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default UpdateCurrencyRatesForm;
