import React from 'react'
import PropTypes from 'prop-types';
import TimePreview from './TimePreview';
import styled from 'styled-components'
import { get } from 'lodash/fp';

  // Styles
  const List = styled.ul`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    background-color: #F9F9F9;
    padding: 0.5rem;
  `

const TimeList = (props) => {
  return (
    <div>
      <List>
        {props.dates.map(date => 
          <TimePreview 
            handleChangeTime={props.handleChangeTime} 
            key={date.id} 
            date={date}
            total={ get(date.id, props.hours) }
          />
        )}
      </List>
    </div>
  )
}

TimeList.propTypes = {
  dates: PropTypes.array,
  handleChangeTime: PropTypes.func
}

export default TimeList