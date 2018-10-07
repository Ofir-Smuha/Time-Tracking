import React from 'react'
import PropTypes from 'prop-types';
import TimePreview from './TimePreview';
import { get } from 'lodash/fp';
import styled from 'styled-components'

const TimeList = (props) => {

  // Styles
  const List = styled.ul`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    background-color: #F9F9F9;
    padding: 0.5rem;
  `

  return (
    <div>
      <List>
        {props.dates.map(date => 
          <TimePreview 
            changeTime={props.changeTime} 
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
  dates: PropTypes.array
}

export default TimeList