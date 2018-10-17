import React, { Component } from 'react'
import AppRouter from './routes/AppRouter'
import { Provider } from 'react-redux'
import {ThemeProvider} from 'styled-components';

import store from 'store'
import {theme} from './constants/themes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRouter/>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App