import React from 'react'
import moment from 'moment'
import { head, last, get } from 'lodash/fp'


const Header = (props) => {

  const startDate = moment(get('id', head(props.dates))).format('MMM DD, YYYY')
  const endDate = moment(get('id', last(props.dates))).format('MMM DD, YYYY');

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

export default Header