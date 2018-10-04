
import React, { Component } from 'react'
import moment from 'moment'

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

  editTime = () => {
    this.setState({
      displayHours: false
    })
  }

  render() {
    return (
      <div>
        <li className="time-prev-container">
          <h3 className="time">{moment(this.props.date.id).format('DD.MM')}</h3>
          <input
            type="text" 
            onChange={this.handleTimeChange} 
            className={`date-input ${this.state.displayHours || this.props.total? ' hidden' : ' show'}`}
          />
          <span 
            className={`${this.state.displayHours || this.props.total? ' show' : ' hidden'}`}
            onClick={this.editTime}>
            total: { this.props.total }
          </span>
      </li>
      </div>
    )
  }
}

export default TimePreview;
