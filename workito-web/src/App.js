import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRoute from './AppRoute';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    )
  }

}

export default App;