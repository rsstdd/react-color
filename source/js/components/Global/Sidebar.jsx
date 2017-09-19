import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'config/routes';


export default class Sidebar extends Component {

  render() {

    return (
      <nav className='sidebar App-sidebar'>
        <div className='sidebar__button'>
          <button>
            Random Color
          </button>
        </div>
        <div className=''>
          <NavLink
            activeClassName='sidebar__nav-link'
            className='sidebar__nav-link'
            exact
            to={ routeCodes.MultiView }
          >
            Red
          </NavLink>
          <NavLink
            activeClassName='sidebar__nav-link'
            className='sidebar__nav-link'
            exact
            to={ routeCodes.MultiView }
          >
            Orange
          </NavLink>
          <NavLink
            activeClassName='sidebar__nav-link'
            className='sidebar__nav-link'
            exact
            to={ routeCodes.MultiView }
          >
            Yellow
          </NavLink>
          <NavLink
            activeClassName='sidebar__nav-link'
            className='sidebar__nav-link'
            exact
            to={ routeCodes.MultiView }
          >
            Green
          </NavLink>
          <NavLink
            activeClassName='sidebar__nav-link'
            className='sidebar__nav-link'
            exact
            to={ routeCodes.MultiView }
          >
            Blue
          </NavLink>
          <NavLink
            activeClassName='sidebar__nav-link'
            className='sidebar__nav-link'
            exact
            to={ routeCodes.MultiView }
          >
            Purple
          </NavLink>
          <NavLink
            activeClassName='sidebar__nav-link'
            className='sidebar__nav-link'
            exact
            to={ routeCodes.MultiView }
          >
            Brown
          </NavLink>
          <NavLink
            activeClassName='sidebar__nav-link'
            className='sidebar__nav-link'
            exact
            to={ routeCodes.MultiView }
          >
            Gray
          </NavLink>
        </div>
      </nav>
    );
  }
}
