import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


import { setSignUp } from 'actions/userActions'
import firebase from 'config/firebase'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginContainer = styled.form`
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
  cursor: pointer;
`

const Label = styled.label`
  font-size: 1rem;
  padding-bottom: 0.3rem;
  font-weight: bold;
`

class SignUp extends Component {
  
  state = {}

  handleSignUp = (e) => {
    e.preventDefault()
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    if (!email || !password) return 
    console.log('passed')
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      console.log(user)
    })
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('error code',errorCode, 'error msg', errorMessage)
    });
  }

  render() {
    return (
      <Wrapper>
        <LoginContainer onSubmit={this.handleSignUp}>
          <Title>Sign-Up</Title>
          <Label>Email</Label>
          <Input type="text" placeholder="Email"/>
          <Label>Password</Label>
          <Input type="text" placeholder="Password"/>
          <Button>LOGIN</Button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </LoginContainer>
      </Wrapper>
    )
  }
}

export default connect(null, { setSignUp })(SignUp)