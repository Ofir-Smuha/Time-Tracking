import React from 'react'
import moment from 'moment'
import {head, last} from 'lodash/fp'

const Header = (props) => {

  const startDate = moment(head(props.times)).format('MMM DD, YYYY')
  const endDate = moment(last(props.times)).format('MMM DD, YYYY')
  
  return (
    <div className="header-container">
      <h1 className="title">{props.children}</h1>
      <h3 className="dates">{startDate} - {endDate}</h3>
    </div> 
  )
}

export default Header