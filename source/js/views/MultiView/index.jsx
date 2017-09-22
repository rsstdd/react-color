import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tile from '../../components/MultiTile';
import Pagination from '../../components/Pagination';
import { getColors, setCurrentColor } from '../../actions/colorAction';

// import loader from '../..assets/img/loader.gif';

@connect(state => ({
  colorData: state.app.get('colorData'),
  colorDataError: state.app.get('colorDataError'),
  colorDataLoading: state.app.get('colorDataLoading'),
  currentColor: state.app.get('currentColor'),
  // pageOfItems: state.app.get('pageOfItems')
}))
export default class MultiView extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    currentColor: PropTypes.object,
    dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.onSelectColor = this.onSelectColor.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (!this.props.colorData) {
      dispatch(getColors());
    }
  }

  onSelectColor(color) {
    const { dispatch } = this.props;
    dispatch(setCurrentColor(color));
  }

  onChangePage = (pageOfItems) => {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    const { colorData, colorDataLoading, colorDataError } = this.props;
    // const styles = { className: "tile Layout__tile" }
    const styles = { 
      tileDiv: "tile Layout__tile", 
      tileName: "tile__name"
    }
    return (
      <div className='Layout__multi-content'>
        { colorData && 
          colorData.map((color) => {
            return (
              <Tile
                key={ color.hex }
                color={ color }
                onSelectColor={ this.onSelectColor }
                setClass={styles}
              />
            );
          })
        }
        { colorDataLoading &&
          <div className="loader">Loading...</div>
        }
        { colorDataError && 
          <h1>Error: { colorDataError }</h1>
        }
        <div>
          <div className="container">
            <div className="text-center">
              { colorData &&
                colorData.map((item) =>
                  <div key={ item.id }>{ item.name }</div>
                )
                // <Pagination items={colorData} onChangePage={ this.onChangePage } />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
