import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { filterBySearch, updateSearchTerm } from '../../actions/colorAction';

//  Logo
// ---------
import navLogo from '../../../assets/img/logo-symbol.svg';

@connect(state => ({
  colorData: state.app.get('colorData'),
  searchTerm: state.app.get('searchTerm')
}))
export default class Menu extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    searchTerm: PropTypes.string,
    dispatch: PropTypes.func,
  }

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const { dispatch, searchTerm, colorData } = this.props;
    const search = event.target.value.toLowerCase();
    dispatch(updateSearchTerm(search));
    dispatch(filterBySearch(searchTerm, colorData));
  };

  render() {
    const { searchTerm } = this.props;
    return (
      <nav className="navbar Layout__header">
        <Link 
          to="/"
          className='navbar__logo'
          >
          <img src={ navLogo } alt="Logo"/>
        </Link>
        <div className='navbar__search-bar'>
          <form>
            <input 
              name="searchTerm"
              type="text"
              placeholder="Search"
              onChange={this.handleChange }
              onSubmit={ (e) => e.preventDefault() }
              value={ searchTerm }
              >
            </input>
          </form>
        </div>
      </nav>
    );
  }
}
