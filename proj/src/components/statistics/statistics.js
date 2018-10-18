import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import { flow, map, keys, flatten, uniq, filter } from 'lodash/fp';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import { fetchData } from 'actions/statisticsActions'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

class Statistics extends Component {

  state = {
    data: [
      {date: 'day 1', Vision: 5, RunTime: 3},
      {date: 'day 2', Vision: 2, RunTime: 4, Fox: 3},
      {date: 'day 3', Vision: 3, RunTime: 8, Fox: 4},
      {date: 'day 4', Vision: 4, RunTime: 5, Fox: 5, Nort: 2},
      {date: 'day 5', Vision: 11, RunTime: 1, Fox: 6, Barc: 2},
      {date: 'day 6', Vision: 6, RunTime: 4, Fox: 7},
      {date: 'day 7', Vision: 7, RunTime: 3, Fox: 10, Nasa: 8}
    ]
  }

  componentDidMount() {
    this.props.fetchData()
  }

  drawBars(){
    let data = this.props.data || [];
    let dataKeys = []
    let colorCodes = ["#17607D", "#F2D8A7", "#1FCECB", "#FF9311", "#003D5C", "#F27649", "#D5CDB6", "#008C74", "#30588C", "#263138"]

    dataKeys = flow([
      map(keys),
      flatten,
      uniq,
      filter((key) => key !== 'date')
    ])(data);

    return dataKeys.map((dataKey, index) => 
      <Bar dataKey={dataKey} stackId="a" key={`Bar-chart-${index}`} fill={colorCodes[index]}/> 
    );
  }

  render() {
    return (
      <Wrapper>
        <BarChart width={600} height={300} data={this.state.data}
              margin={{top: 20, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="date"/>
        <YAxis/>
        <Tooltip/>
        {this.drawBars()}
        <Legend/>
        </BarChart>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  data: state.statistics.data
})

export default connect(mapStateToProps, { fetchData })(Statistics)