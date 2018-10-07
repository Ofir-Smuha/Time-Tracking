import React, { Component } from 'react';
import Header from '../components/time-tracking/Header';
import TimesList from '../components/time-tracking/TimesList';
import moment from 'moment';
import {set} from 'lodash/fp'

class TimeTracking extends Component {
  state = {
    offset: 0,
    dates: [],
    hours: {}
  };

  componentDidMount() {
    this.renderDates();
  }

  changeTime = (hoursValue, id) => {
    const hours = { ...this.state.hours };

    this.setState({
      hours: set([id], hoursValue, hours)
    })
  }

  updateOffset = (offset) => {
    this.setState({
      offset: this.state.offset + offset
    }, this.renderDates)
  }

  renderDates = () => {
    const today = moment().add(this.state.offset, 'days');
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const date = today.clone().add(i, 'days').format('MM.DD.YY')

      dates.push({
        id : date,
      });
    }

    this.setState({
      dates
    });
    
  }

  render() {
    return (
      <div className="App">
        <Header 
          dates={this.state.dates}
          updateOffset={this.updateOffset}>
          Time Tracking
        </Header>
        <TimesList 
          dates={this.state.dates}
          changeTime={this.changeTime}
          hours={ this.state.hours }
        />
      </div>
    );
  }
}

export default TimeTracking;
