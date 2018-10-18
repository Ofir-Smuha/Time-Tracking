import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment';

import { setDates, updateOffset, changeTime } from 'actions/timeTrackingActions'

import Header from 'components/time-tracking/Header';
import TimesList from 'components/time-tracking/TimesList';



class TimeTracking extends Component {

  state = {
    offset: 0,
    dates: [],
    hours: {}
  };

  componentDidMount() {
    this.renderDates();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.offset !== this.props.offset) {
      this.renderDates()
    }
  }

  handleChangeTime = (hoursValue, id) => {
    this.props.changeTime(hoursValue, id)
  }

  handleUpdateOffset = (offset) => {
    this.props.updateOffset(offset)
  }

  renderDates = () => {
    const today = moment().add(this.props.offset, 'days');
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const date = today.clone().add(i, 'days').format('MM.DD.YY')

      dates.push({
        id : date,
      });
    }

    this.props.setDates(dates)
  }

  render() {
    return (
      <div className="App">
        <Header 
          dates={this.props.dates}
          handleUpdateOffset={this.handleUpdateOffset}>
          Time Tracking
        </Header>
        <TimesList 
          dates={this.props.dates}
          hours={ this.props.hours }
          handleChangeTime={ this.handleChangeTime } 
        />
      </div>
    );
  }
}

const mapStateToProps = ({ times }) => ({
  offset: times.offset,
  dates: times.dates,
  hours: times.hours
})

export default connect(mapStateToProps, { setDates, updateOffset, changeTime })(TimeTracking)