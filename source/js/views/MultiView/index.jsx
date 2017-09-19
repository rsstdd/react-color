import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// @connect(state => ({
// }))
export default class MultiView extends Component {
  static propTypes = {
    // asyncLoading: PropTypes.bool,
    // counter: PropTypes.number,
    // from react-redux connect
    // dispatch: PropTypes.func,
  }

  constructor() {
    super();
  }

  render() {

    return (
      <div className='App-content'>
        <h1>Hello, World</h1>
      </div>
    );
  }
}
