import { Box, Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const SwitchCurrency = () => {
  return (
    <Grid item xs={12} md='auto'>
      <Box
        sx={{
          borderRadius: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '0.75rem',
        }}
      >
        <ArrowRightAltIcon sx={{ fontSize: 24, color: '#564dca' }} />
      </Box>
    </Grid>
  );
};

export default SwitchCurrency;
