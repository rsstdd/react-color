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
      <div className='Layout__content'>
        <div className="tile Layout__tile" style={{backgroundColor:"#314036"}}>
          <div className="tile__name">
            <h3>#ffc23</h3>
          </div>
        </div>
        <div className="tile Layout__tile">
          <div className="tile__name">
            <h3>#333</h3>
          </div>
        </div>
        <div className="tile Layout__tile">
          <div className="tile__name">
            <h3>#333</h3>
          </div>
        </div>
        <div className="tile Layout__tile">
          <div className="tile__name">
            <h3>#333</h3>
          </div>
        </div>
        <div className="tile Layout__tile">
          <div className="tile__name">
            <h3>#333</h3>
          </div>
        </div>
        <div className="tile Layout__tile">
          <div className="tile__name">
            <h3>#333</h3>
          </div>
        </div>
      </div>
    );
  }
}
