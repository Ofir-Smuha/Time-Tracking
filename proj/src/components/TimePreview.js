import React from 'react'
import moment from 'moment'

const TimePreview = (props) => {
  return (
    <div>
      <li className="time-prev-container">
        <h3 className="time">{moment(props.time).format('DD.MM')}</h3>
      </li>
    </div>
  )
}

export default TimePreview