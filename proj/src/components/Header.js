import React from 'react'
import moment from 'moment'
export default (props) => {
  return (
    <div className="header-container">
      <div>
        <h1 className="title">{props.children}</h1>
        <h3 className="dates">{moment(props.times[0]).format('MMM DD, YYYY')} - {moment(props.times[6]).format('MMM DD, YYYY')}</h3>
      </div>
      <div className="scroll-btns">
        <button className="prev-btn">PREVIOUS</button>
        <button className="next-btn">NEXT</button>
      </div>
    </div> 
  )
}
