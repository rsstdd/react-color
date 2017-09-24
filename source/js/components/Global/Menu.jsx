import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
// import { reduxForm, Field, Form } from 'redux-form';
import * as actions from './../../actions/colorAction.js';


//  Logo
// ---------
import navLogo from '../../../assets/img/logo-symbol.svg';

export default class Menu extends Component {
  constructor() {
    super();
    
    this.state = {
      searchTerm: ''
    }
    
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleSubmit = ({ colorSearch }) => {
  //   console.log('HANDLE FORM SUBMIT: ==> ', colorSearch);
  // }
  
  handleChange = (e) => {
    e.preventDefault;
    console.log('Ive been clocked');
  };

  render() {
    return (
      <nav className="navbar Layout__header">
        <Link 
          to="/"
          className='navbar__logo'
          >
          <img src={ navLogo } alt="Logo"/>
        </Link>
        <div className='navbar__search-bar'>
          <form onSubmit={this.handleChange}>
            <input 
              name="colorSearch"
              type="text"
              placeholder="Search"
              value={this.state.searchTerm}
              >
            </input>
          </form>
        </div>
      </nav>
    );
  }
}
