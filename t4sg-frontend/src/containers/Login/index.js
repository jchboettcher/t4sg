import React, { useState, useRef } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  BackgroundContainer,
  LoginContainer,
  Input,
  Title,
  Button,
  IncPass,
  LoadingMsg,
  Logo,
} from '../styles'
import { LOGIN } from './graphql'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const history = useHistory()
  const inputRef = useRef()
  const [login, { loading }] = useMutation(LOGIN, {
    variables: {
      email,
      password
    },
    onError(err) {
      setPassword('')
      inputRef.current.focus()
      setErrMsg(err.message.replace('GraphQL error: ', ''))
    },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/vaccines')
    }
  })
  return (
    <BackgroundContainer>
      <LoginContainer>
        <Title>Welcome</Title>
        <Input
          type='text'
          name='email'
          onChange={e => setEmail(e.target.value)}
          value={email}
          placeholder='Email'
        />
        <Input
          type='password'
          name='password'
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder='Password'
          ref={inputRef}
        />
        { !!errMsg && <IncPass>{errMsg}</IncPass> }
        { loading && <LoadingMsg>Signing you in...</LoadingMsg> }
        <Button onClick={() => {
          setErrMsg('')
          login()
        }}>Login</Button>
      </LoginContainer>
      <Logo src="https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/en/h-logo-blue.svg" />
    </BackgroundContainer>
  )
}


export default Login