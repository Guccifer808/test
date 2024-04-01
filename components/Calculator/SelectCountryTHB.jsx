import { Autocomplete, Grid, TextField } from '@mui/material';

const SelectCountryTHB = ({ value, setValue, label, thbData }) => {
  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        disableClearable
        value={value}
        onChange={(event, newValue) => setValue(newValue ? newValue : null)}
        options={thbData}
        getOptionLabel={(option) => {
          return option.currency;
        }}
       
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
      />
    </Grid>
  );
};

export default SelectCountryTHB;
