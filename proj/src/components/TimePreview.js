import React from 'react'
import moment from 'moment'
export default (props) => {
  return (
    <div>
      <li className="time-prev-container">
        <h3 className="time">{moment(props.time).format('DD.MM')}</h3>
        <input className="date-input"/>
      </li>
    </div>
  )
}
