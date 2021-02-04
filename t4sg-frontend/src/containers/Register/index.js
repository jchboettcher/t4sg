import React, { useState } from 'react'
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
import { REGISTER } from './graphql'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const history = useHistory()
  const [register, { loading }] = useMutation(REGISTER, {
    variables: {
      input: {
        email,
        password,
        firstName,
        lastName,
      },
    },
    onError(err) {
      setErrMsg(err.message.replace('GraphQL error: ', ''))
    },
    onCompleted: ({ register: { token } }) => {
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
        />
        <Input
          type='text'
          name='firstName'
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
          placeholder='First Name'
        />
        <Input
          type='text'
          name='lastName'
          onChange={e => setLastName(e.target.value)}
          value={lastName}
          placeholder='Last Name'
        />
        { !!errMsg && <IncPass>{errMsg}</IncPass> }
        { loading && <LoadingMsg>Creating user...</LoadingMsg> }
        <Button onClick={() => {
          setErrMsg('')
          register()
        }}>Register</Button>
      </LoginContainer>
      <Logo src="https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/en/h-logo-blue.svg" />
    </BackgroundContainer>
  )
}


export default Register