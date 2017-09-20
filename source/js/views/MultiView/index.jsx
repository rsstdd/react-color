import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tile from '../../components/MultiTile';

@connect(state => ({
  colorData: state.app.get('colorData')
}))
export default class MultiView extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  render() {
    const tiles = this.props.colorData.map((color) => {
      return (
        <Tile 
          key={color.hex}
          color={color}
        />
      );
    });

    return (
      <div className='Layout__content'>
        { tiles }
      </div>
    );
  }
}
