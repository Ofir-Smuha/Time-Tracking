import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import styled from 'styled-components'

import { setLoggedOut } from 'actions/userActions'
import firebase from 'config/firebase'

const NavBarContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const LoggedUser = styled.h1`
  font-size: 1rem
  margin-right: 10px;
`
const Button = styled.button`
  margin-right: 10px;
  cursor: pointer;
`

const NavBar = (props) => {

  const setSignOut = () => {
    firebase.auth().signOut().then(() => {
      props.setLoggedOut()
    }).catch((error) => {
      // An error happened.
    });
  }
  
  if (!props.currUser){
    return null
  }

  return (
    <NavBarContainer>
      <LoggedUser>{props.currUser.email}</LoggedUser>
      <Button onClick={setSignOut}>Log-out</Button>
    </NavBarContainer>
  )
}

NavBar.propTypes = {
  setLoggedOut: PropTypes.func
}

const mapStateToProps = (state) => ({
  currUser: state.user.currUser
})

export default connect(mapStateToProps, { setLoggedOut })(NavBar)