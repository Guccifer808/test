import { Autocomplete, Grid, TextField } from '@mui/material';

const SelectCountry = (props) => {
  const { value, setValue, label, countryData, disableCurrencySelection } =
    props;

  return (
    <Grid item xs={12} md={3} sx={{ paddingBottom: '0.75rem' }}>
      <Autocomplete
        disableClearable
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue ? newValue : null); // Set the entire country object as the value
        }}
        options={countryData}
        getOptionLabel={(option) => {
          return option.currency;
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#564dca',
            },
          },
        }}
        // isOptionEqualToValue={(option, value) =>
        //   option.currency === value.currency && option.flag === value.flag
        // }
        renderOption={(props, option) => (
          <li {...props}>
            <img
              src={option.flag}
              alt=''
              style={{ width: 24, marginRight: 8 }}
            />
            {option.currency} - {option.name}
          </li>
        )}
        renderInput={(params) => <TextField {...params} label={label} />}
        disabled={disableCurrencySelection} // Disable the Autocomplete if disableCurrencySelection is true
      />
    </Grid>
  );
};

export default SelectCountry;
