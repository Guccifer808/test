import { useFetch } from '@/lib/hooks/useFetch';
import { Autocomplete, Grid, Skeleton, TextField } from '@mui/material';

import flagUSA from '@/public/img/icon/us.png';
import flagRU from '@/public/img/icon/ru.png';
import flagTH from '@/public/img/icon/th.png';

const countryData = [
  { name: 'United States', flag: flagUSA, currency: 'USD' },
  { name: 'Russia', flag: flagRU, currency: 'RUB' },
  { name: 'Thailand', flag: flagTH, currency: 'THB' },
];

const SelectCountry = (props) => {
  const { value, setValue, label } = props;

  const dataCountries = countryData.map((country) => ({
    label: `${country.currency} - ${country.name}`,
    flag: country.flag,
  }));

  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={value}
        disableClearable
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={dataCountries}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <li {...props}>
            <img
              src={option.flag}
              alt=''
              style={{ width: 24, marginRight: 8 }}
            />
            {option.label}
          </li>
        )}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCountry;
