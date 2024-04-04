import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import PageLoader from '@/components/PageLoader/PageLoader';
import Head from 'next/head';

const logo = '/img/logo/fm_logo.svg';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'© '}
      <Link
        color='inherit'
        href='https://github.com/Guccifer808'
        target='_blank'
      >
        Guccifer808
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (error) {
      setError(
        'Неверный адрес электронной почты или пароль. Пожалуйста, попробуйте снова.'
      );
    }
  };

  return (
    <>
      <Head>
        <title>FastMoney - Вход в систему</title>
        <meta name='description' content='' />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        {loading ? (
          <PageLoader />
        ) : (
          <>
            <Container component='main' maxWidth='xs'>
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
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
                }}
              >
                <Avatar
                  sx={{
                    m: 2,
                    bgcolor: 'black',
                    height: '6rem',
                    width: '6rem',
                    border: '2px solid #564dca',
                  }}
                >
                  <Image src={logo} width={64} height={64} alt='fastmoney' />
                </Avatar>
                <Typography component='h1' variant='h5'>
                  Вход в систему
                </Typography>
                <Box
                  component='form'
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                  maxWidth='90%'
                >
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    InputProps={{ style: { backgroundColor: '#fff' } }}
                  />
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='Пароль'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    InputProps={{ style: { backgroundColor: '#fff' } }}
                  />
                  <Box textAlign='center'>
                    <Button
                      type='submit'
                      variant='contained'
                      sx={{
                        width: '50%',
                        mt: 3,
                        mb: 2,
                        bgcolor: '#564dca',
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
                      Войти
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Container component='main' maxWidth='sm'>
                {error && <Alert severity='error'>{error}</Alert>}
              </Container>
              <Copyright sx={{ mt: 8, mb: 4, color: 'white' }} />
            </Container>
          </>
        )}
      </ThemeProvider>
    </>
  );
}
