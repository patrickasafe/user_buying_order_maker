import type { NextPage } from 'next'

import styles from 'styles/Home.module.css'
import { signIn, useSession } from 'next-auth/react'
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Login: NextPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const { data: session, status: loadingSession } = useSession();
  const router = useRouter()

  if (loadingSession == "loading") {
    return <p>Loading...</p>
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div>
      {!session && (
        <>

          <Container
            component="main"
            maxWidth="xs"
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  m: 1,
                  bgcolor: 'primary.main'
                }}
              >
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
              >
                Entrar
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate sx={{
                  mt: 1
                }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={
                    email
                  }
                  onChange={
                    e =>
                      setEmail(e.target.value)
                  }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={
                    password
                  }
                  onChange={
                    e =>
                      setPassword(e.target.value)
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember" color="primary"
                    />
                  }
                  label="Me lembre"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2
                  }}
                >
                  Entrar
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="/register"
                      variant="body2"
                    >
                      Esqueceu a senha?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="/register"
                      variant="body2"
                    >
                      Não tem uma conta? Cadastre aqui
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <></>
          </Container>

        </>
      )}



      {/* {session && (
        <>
          <h4>You are logged as: {session.user.name}</h4>
          <div className={styles.boxCenter}>
            <h4>Email: {session.user.email}</h4>
            <br />
            {session.user.image && (
              <span>
                <img src={session.user.image} alt={session.user.name} />
              </span>
            )}
          </div>
          <br />
          <br />
          <button className={styles.primaryButton} onClick={() => signOut()}>
            Sign out
          </button>
        </>
      )
      } */}
    </div >
  )
}

export default Login
