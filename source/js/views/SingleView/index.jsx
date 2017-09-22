import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Tile from '../../components/MultiTile';
import { setCurrentColor } from '../../actions/colorAction';

@connect(state => ({
  colorData: state.app.get('colorData'),
  currentColor: state.app.get('currentColor'),
}))
export default class SinlgeView extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    currentColor: PropTypes.object,
    dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = Number(location.pathname.slice(8));
  }
  
  onSelectColor(color) {
    const { dispatch } = this.props;
    dispatch(setCurrentColor(color));
  }

  render() {
    const { currentColor, colorData } = this.props;
    console.log(colorData);
    const { color, hex, id } = currentColor ? currentColor : '';
    let divColor = {
      backgroundColor: `${hex}`
    };
    const styles = { 
      tileDiv: "single-view__single-view-tile Layout__single-view-small-tile", 
      tileName: "single-view__single-view-tile__name Layout__single-view__single-view-tile__name"
    }


    return (
      <div className=" Layout__single-content single-view" >
          <div className="single-view__tile Layout__single-view-tile" style={ divColor }>
            <h3 className="single-view__tile--name Layout__single-view-tile--name">{ hex }</h3>
          </div>
          
          <div className="single-view__tile-list Layout__single-view__tile-list">
            { colorData && 
              colorData
                .filter(item => item.color === `${color}`)
                .slice(0, 4)
                .map(item => {
                  return (
                    <Tile
                      setClass={ styles }
                      key={ item.id }
                      color={ item }
                      onSelectColor={ this.onSelectColor }
                    />
                  )
                })
            }
          </div>
          {/* <Link 
            to="/"
            className='btn single-view__button'
            >
            {/* <button>
              reset
            </button>
          </Link> */}
      </div>
    );
  }
}
