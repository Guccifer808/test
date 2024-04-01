import { Grid, InputAdornment, TextField } from '@mui/material';

const InputAmout = ({ amount, setAmount, currency }) => {
  const handleAmountChange = (e) => {
    // Check if the entered value is a valid positive number within the desired range
    let newAmount = parseFloat(e.target.value);
    if (isNaN(newAmount) || newAmount < 0) {
      newAmount = ''; // Set to empty string if entered value is invalid
    } else if (newAmount > 1000000) {
      newAmount = 1000000; // Limit the maximum value to 1000000
    }
    // Update the state with the sanitized value
    setAmount(newAmount.toString());
  };

  return (
    <Grid item xs={12} md>
      <TextField
        value={amount}
        onChange={handleAmountChange}
        label='Сумма'
        fullWidth
        InputProps={{
          type: 'number',
          startAdornment: (
            <InputAdornment position='start'>{currency.name}</InputAdornment>
          ),
        }}
        // Add error handling for negative amounts
        error={parseFloat(amount) < 0}
        // Provide error message if amount is negative
        helperText={
          parseFloat(amount) < 0 ? 'Сумма не может быть отрицательной' : ''
        }
      />
    </Grid>
  );
};

export default InputAmout;
