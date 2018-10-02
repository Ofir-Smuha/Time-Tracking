import React, { Component } from 'react';
import Header from './components/Header';
import TimesList from './components/TimesList';
import moment from 'moment';

class App extends Component {
  state = {
    offset: 0
  };

  render() {
    const today = new moment().add(this.state.offset, 'days');
    const times = [];

    for (let i = 0; i < 7; i++) {
      times.push(
        today.clone().add(i, 'days').format('DD.MM.YY')
      );
    }

    console.log(times);

    return (
      <div className="App">
        <Header times={times}>Time Tracking</Header>
        <TimesList times={times}/>
      </div>
    );
  }
}

export default App;
