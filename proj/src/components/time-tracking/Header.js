import React from 'react';
import moment from 'moment';
import { head, last, get } from 'lodash/fp';
import styled from 'styled-components';


const Header = (props) => {

  // Styles
  const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
  color: ${({theme}) => theme.main};
  `

  const Button = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    color: #fff
    background-color: ${({theme}) => theme.main};
  `
  const FirstButton = styled(Button)`
    margin-right: 0.8rem;
  `

  const startDate = moment(get('id', head(props.dates))).format('MMM DD, YYYY')
  const endDate = moment(get('id', last(props.dates))).format('MMM DD, YYYY');

  return (
      <div className="header-container">
        <div>
            <Title>{props.children}</Title>
          <h3 className="dates">{startDate} - {endDate}</h3>
        </div>
        <div className="scroll-btns">
          <FirstButton onClick={() => props.handleUpdateOffset(-7)}>PREVIOUS</FirstButton>
          <Button onClick={() => props.handleUpdateOffset(7)}>NEXT</Button>
        </div>
      </div> 
  )
}

export default Header

