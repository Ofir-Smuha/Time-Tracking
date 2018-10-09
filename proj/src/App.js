import React, { Component } from 'react'
import AppRouter from './routes/AppRouter'
import {ThemeProvider} from 'styled-components';
import {theme} from './constants/themes'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppRouter/>
      </ThemeProvider>
    )
  }
}

export default App