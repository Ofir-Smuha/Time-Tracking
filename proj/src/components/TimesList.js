import React from 'react'
import TimePreview from './TimePreview';

const TimeList = (props) => {
  return (
    <div>
      <ul className="times-container">
        {props.times.map(time => <TimePreview key={time} time={time}/>)}
      </ul>
    </div>
  )
}

export default TimeList