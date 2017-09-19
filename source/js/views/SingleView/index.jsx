import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { testAction, testAsync } from 'actions/app';

// @connect(state => ({
// }))
export default class SinlgeView extends Component {
  static propTypes = {
    // asyncLoading: PropTypes.bool,
    // counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  constructor() {
    super();
  }

  render() {

    return (
      <div className='SinlgeView Layout__content'>
        <h1>Something</h1>
      </div>
    );
  }
}
