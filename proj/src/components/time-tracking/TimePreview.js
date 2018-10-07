
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../../constants/themes'

// Style
const PrevContainer = styled.li`
  height: 15rem;
  width: 5rem;
  font-size: 0.9rem;
  font-weight: bold;
  border: 1px solid #E1E1E1;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EFEFEF;
`

const Dates = styled.h3`
  padding: 0.5rem 0.8rem;
  color: ${props => props.theme.main}
`

const HourInput = styled.input`
  width: 40%;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  ${({ active }) => active && `
  display: none;
`}
`

const HourDisplay = styled.span`
    display: none;
  ${({ active }) => active && `
    display: inline-block;
  `}
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

  componentDidMount() {
    console.log('ddd',this.props)
  }

  
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PrevContainer>
          <Dates>{moment(this.props.date.id).format('DD.MM')}</Dates>
          <HourInput
            type="text"
            active={this.state.displayHours || this.props.total} 
            onChange={(e) => this.handleTimeChange(e)} 
          />
          <HourDisplay 
            active={this.state.displayHours || this.props.total} 
            onClick={this.handleEditTime}>
            total: { this.props.total }
          </HourDisplay>
      </PrevContainer>
      </ThemeProvider>
    )
  }
}

TimePreview.propTypes = {
  date: PropTypes.object,
  total: PropTypes.number
}

export default TimePreview;