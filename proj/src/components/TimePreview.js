
import React, { Component } from 'react'
import moment from 'moment'
import styled, { ThemeProvider } from 'styled-components'

const theme = {
  main: '#9013FE',
}

const Dates = styled.h3`
  padding: 0.5rem 0.8rem;
  color: ${props => props.theme.main}
`

class TimePreview extends Component {
  
  state = {
    displayHours: false,
  }

  handleTimeChange = (e) => {
    this.props.changeTime(e.target.value, this.props.date.id)
    if (e.target.value === '') return 
    this.setState({
      displayHours: true
    })
  }

  handleEditTime = () => {
    this.setState({
      displayHours: false
    })
  }

  
  render() {
    return (
      <ThemeProvider theme={theme}>
        <li className="time-prev-container">
          <Dates>{moment(this.props.date.id).format('DD.MM')}</Dates>
          <input
            type="text" 
            onChange={(e) => this.handleTimeChange(e)} 
            className={`date-input ${this.state.displayHours || this.props.total? ' hidden' : ' show'}`}
          />
          <span 
            className={`${this.state.displayHours || this.props.total? ' show' : ' hidden'}`}
            onClick={this.handleEditTime}>
            total: { this.props.total }
          </span>
      </li>
      </ThemeProvider>
    )
  }
}

export default TimePreview;