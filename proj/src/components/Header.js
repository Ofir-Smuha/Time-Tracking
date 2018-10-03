import React from 'react'
import moment from 'moment'
import {head, last} from 'lodash/fp'


export default (props) => {

  const startDate = moment(head(props.times)).format('MMM DD, YYYY')
  const endDate = moment(last(props.times)).format('MMM DD, YYYY');


  return (
    <div className="header-container">
      <div>
        <h1 className="title">{props.children}</h1>
        <h3 className="dates">{startDate} - {endDate}</h3>
      </div>
      <div className="scroll-btns">
        <button onClick={() => props.updateOffset(-7)} className="prev-btn">PREVIOUS</button>
        <button onClick={() => props.updateOffset(7)} className="next-btn">NEXT</button>
      </div>
    </div> 
  )
}
