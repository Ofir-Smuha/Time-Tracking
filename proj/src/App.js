import React, { Component } from 'react';
import Header from './components/Header';
import TimesList from './components/TimesList';
import moment from 'moment';

class App extends Component {
  state = {
    offset: 0,
    times: []
  };

  componentWillMount() {
    this.renderTimes()
  }

  updateOffset = (offset) => {
    this.setState({
      offset: this.state.offset + offset
    }, this.renderTimes)
  }

  renderTimes = () => {
    const today = moment().add(this.state.offset, 'days');
    const times = [];

    for (let i = 0; i < 7; i++) {
      times.push(
        today.clone().add(i, 'days').format('MM.DD.YY')
      );
    }

    this.setState({
      times: times
    })
  }

  render() {

    return (
      <div className="App">
        <Header 
          times={this.state.times}
          updateOffset={this.updateOffset}>
          Time Tracking
        </Header>
        <TimesList times={this.state.times}/>
      </div>
    );
  }
}

export default App;
