import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { setFilterOnColor, setCurrentColor } from '../../actions/colorAction';


@connect(state => ({
  colorData: state.app.get('colorData'),
  currentColor: state.app.get('currentColor'),
  filteredColors: state.app.get('filteredColors'),
}))
export default class Sidebar extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    currentColor: PropTypes.object,
    filteredColors: PropTypes.array,
    dispatch: PropTypes.func,
  }

  constructor() {
    super()

    this.state = {
      menuItems: ['All', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray'],
      colorArr: [],
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

  applyColorFilter(capColor) {
    const { dispatch, colorData, filterColorOptions } = this.props;
    let color = capColor.toLowerCase();
    
    if (color === 'all') {
      colorArr.push(color);
    } else {
      let colorArr = colorData ? colorData.filter(item => item.color === color) : [];
      dispatch(setFilterOnColor(colorArr));
    }
  }

  render() {
    const { menuItems } = this.state;
    const { currentColor } = this.props;
    let id = currentColor ? currentColor.id : 50;

    return (
      <nav className='sidebar Layout__sidebar'>
        <Link 
          to={`/color/${id}`}
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
                onClick={ () => this.applyColorFilter(item) }
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
