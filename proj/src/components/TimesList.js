import React from 'react'
import TimePreview from './TimePreview';

export default (props) => {
  return (
    <div>
      <ul className="times-container">
        {props.times.map(time => <TimePreview key={time} time={time}/>)}
      </ul>
    </div>
  )
}