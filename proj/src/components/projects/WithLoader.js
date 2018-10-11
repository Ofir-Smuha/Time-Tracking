import React, { Component } from 'react'
import styled from 'styled-components'
import loader from 'assets/images/ring-loader.gif'

const Loader = styled.img`
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);
  width: 80px;
`


const withLoader = (WrappedComponent) => {
  return class extends Component { 
    render() {
      if (this.props.isLoading){
        return (<Loader src={loader} alt="loading"/>)
      }
      return (<WrappedComponent {...this.props}></WrappedComponent>)
    }
  }
}

export default withLoader