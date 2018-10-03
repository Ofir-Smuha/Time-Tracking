import React from 'react'
import moment from 'moment'
import fp from 'lodash/fp'

const Header = (props) => {

  const startDate = fp.head(props.times)
  const endDate = fp.last(props.times)
  
  return (
    <div className="header-container">
      <h1 className="title">{props.children}</h1>
      <h3 className="dates">
        {moment(startDate).format('MMM DD, YYYY')} - {moment(endDate).format('MMM DD, YYYY')}
      </h3>
    </div> 
  )
}

export default Header