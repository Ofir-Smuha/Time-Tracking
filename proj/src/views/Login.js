import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginContainer = styled.div`
  width: 300px;
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
  background-color: ${({theme}) => theme.main}
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
      <Wrapper>
        <LoginContainer>
          <Title>Login</Title>
          <Label>Email</Label>
          <Input type="text"/>
          <Label>Password</Label>
          <Input type="text"/>
          <Button>LOGIN</Button>
        </LoginContainer>
      </Wrapper>
    )
  }
}

export default Login