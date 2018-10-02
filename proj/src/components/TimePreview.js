import React from 'react'
import moment from 'moment'
export default (props) => {
  return (
    <div>
      <li className="time-prev-container">
        <h3 className="time">{moment(props.time).format('MM.DD')}</h3>
      </li>
    </div>
  )
}
