import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterColor } from '../../actions/colorAction';

@connect(state => ({
  colorData: state.app.get('colorData'),
  currentColor: state.app.get('currentColor'),
}))
export default class Sidebar extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    currentColor: PropTypes.object,
    dispatch: PropTypes.func,
  }

  constructor() {
    super()
    
    this.getRandomColor = this.getRandomColor.bind(this);
    this.filterColor = this.filterColor.bind(this);
  }

  getRandomColor() {
    const { dispatch } = this.props;
    console.log('getRandomColor');
  }

  filterColor(color) {
    console.log(colorData);
    const { dispatch, colorData } = this.props;
    console.log('filterColor', color);
    if (colorData) {
      const filterColor = colorData.filter(item => item.color === `${color}`);
      console.log(filterColor);
    } else {
      console.log("BE SAD");
    }
    dispatch(filterColor(filterColor));
  }

  render() {
    const { colorData } = this.props;
    console.log('-------------------------');
    console.log(this.props);
    console.log('SIDEBAR ______>', colorData);

    return (
      <nav className='sidebar Layout__sidebar'>
        <div className='btn sidebar__button'>
          <button>
            Random Color
          </button>
        </div>
        <ul className=''>
          <a
            className='sidebar__nav-link'
            onClick={(e) => this.filterColor('red') }
          >
            Red
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.filterColor("orange") }
          >
            Orange
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.filterColor("yellow") }
          >
            Yellow
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.filterColor("green") }
          >
            Green
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.filterColor("blue") }
          >
            Blue
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.filterColor("purple") }
          >
            Purple
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.filterColor("brown") }
          >
            Brown
          </a>
          <a
            className='sidebar__nav-link'
            onClick={() => this.filterColor("gray") }
          >
            Gray
          </a>
        </ul>
      </nav>
    );
  }
}
