import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setFilterOnColor } from '../../actions/colorAction';

@connect(state => ({
  filterColor: state.app.get('filterColor'),
  currentColor: state.app.get('currentColor'),
}))
export default class Sidebar extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    currentColor: PropTypes.object,
    filterColor: PropTypes.func,
    dispatch: PropTypes.func,
  }

  constructor() {
    super()
    
    this.getRandomColor = this.getRandomColor.bind(this);
    this.applyColorFilter = this.applyColorFilter.bind(this);
  }

  getRandomColor() {
    const { dispatch } = this.props;
    const num = Math.floor(Math.random() * 103);
    
  }

  applyColorFilter(color) {
    const { dispatch } = this.props;
    // const filterColor = colorData.filter(item => item.color === `${color}`);
    // console.log(filterColor);
    dispatch(setFilterOnColor(color));
  }

  render() {
    return (
      <nav className='sidebar Layout__sidebar'>
        <div className='btn sidebar__button'>
          <button
            onClick={this.getRandomColor}
            >
            Random Color
          </button>
        </div>
        <ul className=''>
          <a
            className='sidebar__nav-link'
            onClick={(e) => this.applyColorFilter('red') }
          >
            Red
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.applyColorFilter("orange") }
          >
            Orange
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.applyColorFilter("yellow") }
          >
            Yellow
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.applyColorFilter("green") }
          >
            Green
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.applyColorFilter("blue") }
          >
            Blue
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.applyColorFilter("purple") }
          >
            Purple
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.applyColorFilter("brown") }
          >
            Brown
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.applyColorFilter("gray") }
          >
            Gray
          </a>
        </ul>
      </nav>
    );
  }
}
