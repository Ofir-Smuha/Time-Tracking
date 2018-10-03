import React from 'react'
import TimePreview from './TimePreview';
import { get } from 'lodash/fp';

const TimeList = (props) => {
  return (
    <div>
      <ul className="times-container">
        {props.dates.map(date => 
        <TimePreview 
          changeTime={props.changeTime} 
          key={date.id} 
          date={date}
          total={ get(date.id, props.hours) }
        />)}
      </ul>
    </div>
  )
}

export default TimeList