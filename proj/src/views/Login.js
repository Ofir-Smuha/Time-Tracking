import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';
import styled from 'styled-components'

import { setLoggedIn } from 'actions/userActions'
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

class Login extends Component {

  state  = {
    email: '',
    password: ''
  };

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;
        this.props.setLoggedIn(email, uid)
      }
    });
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  };

  handleLogin = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    if (!email || !password) return ;
    firebase.auth().signInWithEmailAndPassword(email, password).then(({user}) => {
      const { email, uid} = user;
      this.props.setLoggedIn(email, uid)
    })
    .catch(function(error) {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
  };

  render() {
    if(this.props.currentUser) {
      return <Redirect to='/projects' />
    }
    return (
     <Wrapper>
        <LoginContainer onSubmit={this.handleLogin}>
          <Title>Login</Title>
          <Label>Email</Label>
          <Input
                 type="text"
                 name="email"
                 placeholder="Email"
                 value={this.state.email}
                 onChange={this.handleInputChange}
          />
          <Label>Password</Label>
          <Input
                 type="text"
                 name="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.handleInputChange}
          />
          <Button>LOGIN</Button>
          <p>Dont have an account? <Link to="/signup">Sign-up</Link></p>
        </LoginContainer>
      </Wrapper>
    )
  }
}

Login.propTypes = {
  setLoggedIn: PropTypes.func
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, { setLoggedIn })(Login)