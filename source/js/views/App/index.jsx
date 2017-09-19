import React, { Component } from 'react';
import Routes from 'config/routes';
import PropTypes from 'prop-types';

import Menu from 'components/Global/Menu';
import Sidebar from 'components/Global/SideBar';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <div className='App'>
        <Menu />

        <div className="App-body">
          <Sidebar />
          <Routes />
        </div>
      </div>
    );
  }
}
