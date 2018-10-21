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

  state = {}

  componentDidMount() {
    this.props.fetchData()
  }

  drawBars(){

    let dataKeys = []
    let colorCodes = ["#17607D", "#F2D8A7", "#1FCECB", "#FF9311", "#003D5C", "#F27649", "#D5CDB6", "#008C74", "#30588C", "#263138"]

    dataKeys = flow([
      map(keys),
      flatten,
      uniq,
      filter((key) => key !== 'date')
    ])(this.props.chartData);

    return dataKeys.map((dataKey, index) => 
      <Bar dataKey={dataKey} stackId="a" key={`Bar-chart-${index}`} fill={colorCodes[index]}/> 
    );
  }

  render() {
    return (
      <Wrapper>
        <BarChart width={600} height={300} data={this.props.chartData}
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
  chartData: state.statistics
})

export default connect(mapStateToProps, { fetchData })(Statistics)