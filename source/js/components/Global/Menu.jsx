import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field, Form } from 'redux-form';
import * as actions from './../../actions/colorAction.js';


//  Images
// ---------
import navLogo from '../../../assets/img/logo-symbol.svg';

class Menu extends Component {

  handleFormSubmit = ({ colorSearch }) => {
    console.log('HANDLE FORM SUBMIT: ==> ', colorSearch);
    // this.props.signinUser({ email, password, name, location });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <nav className="navbar Layout__header">
        <Link 
          to="/"
          className='navbar__logo'
          >
          <img src={ navLogo } alt="Logo"/>
        </Link>
        <div className='navbar__search-bar'>
          <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field
              name="colorSearch"
              component="input"
              type="text"
              placeholder="Search"
            />
          </Form>
        </div>
      </nav>
    );
  }
}

const form = reduxForm({ form: 'colorForm' })(Menu);
export default connect(null, actions)(form);