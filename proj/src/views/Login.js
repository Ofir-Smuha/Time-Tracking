import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {theme} from '../constants/themes'

const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%,-50%);
  padding: 1.2rem 1.5rem;
  background-color: #F9F9F9;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #E1E1E1;
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #262626;
`
const Input = styled.input`
  margin-bottom: 2rem;
  border-radius: 5px;
  border: 1px solid #E1E1E1;
  outline: none;
  padding: 0.8rem 0.6rem;
  min-width: 15rem;
`

const Button = styled.button`
  background-color: ${props => props.theme.main}
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.8rem 0.6rem;
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  font-size: 1rem;
  padding-bottom: 0.3rem;
  font-weight: bold;
`

class Login extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <LoginContainer>
          <Title>Login</Title>
          <Label>Email</Label>
          <Input
          type="text"/>
          <Label>Password</Label>
          <Input
          type="text"/>
          <Button>LOGIN</Button>
        </LoginContainer>
      </ThemeProvider>
    )
  }
}

export default Login