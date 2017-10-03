import React, { Component } from 'react';
import Routes from 'config/routes';
import PropTypes from 'prop-types';

import Menu from 'components/Global/Menu';
import Sidebar from 'components/Global/Sidebar';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <div className='Layout'>
        <Menu />

        <div className="Layout__body">
          <Sidebar />
          <Routes />
        </div>
      </div>
    );
  }
}
