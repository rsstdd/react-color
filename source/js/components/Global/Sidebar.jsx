import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { setFilterOnColor, setCurrentColor } from '../../actions/colorAction';


@connect(state => ({
  colorData: state.app.get('colorData'),
  currentColor: state.app.get('currentColor'),
  filterColor: state.app.get('filterColor'),
}))
export default class Sidebar extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    currentColor: PropTypes.object,
    uniqueItems: PropTypes.array,
    filterColorOptions: PropTypes.array,
    filterColor: PropTypes.func,
    dispatch: PropTypes.func,
  }

  constructor() {
    super();

    this.state = {
      menuItems: ['All', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Pruple', 'Brown', 'Gray']
    }

    this.getRandomColor = this.getRandomColor.bind(this);
    this.applyColorFilter = this.applyColorFilter.bind(this);
  }

  getRandomColor() {
    const { colorData, dispatch } = this.props;
    const num = Math.floor(Math.random() * colorData.length);
    const color = colorData[num];

    dispatch(setCurrentColor(color));
  }

  applyColorFilter(color) {
    const { dispatch, colorData, filterColorOptions } = this.props;
    const uniqueColors = (x, i, a) => a.indexOf(x) === i;
    console.log(uniqueColors);
    const options = filterColorOptions.concat(colorData.map(item => item.color).filter(uniqueColors));
    console.log(options);
    dispatch(setFilterOnColor(color.toLowerCase()));
    // dispatch(setFilterOptions(options))
  }

  render() {
    const { menuItems } = this.state;

    console.log('SIDEBAR', this.props);
    console.log('SIDEBAR', this.props.currentColor);
    console.log('--------------------');

    return (
      <nav className='sidebar Layout__sidebar'>
        <Link 
          to="`/color/${id}`"
          className='btn sidebar__button'>
          <button
            onClick={ this.getRandomColor }
            >
            Random Color
          </button>
        </Link>
        <ul className=''>
        {
          menuItems.map(item => {
            return (
              <Link
              to="/"
              key={ item }
              className='sidebar__nav-link'
              onClick={ (e) => this.applyColorFilter(item) }
            >
              { item }
            </Link>
            )
          })
        } 
        </ul>
      </nav>
    );
  }
}
