import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tile from '../../components/MultiTile';
import Loading from '../../components/Loading';
import { getColors, setCurrentColor } from '../../actions/colorAction';

@connect(state => ({
    // Colors
  colorData: state.app.get('colorData'),
  colorDataError: state.app.get('colorDataError'),
  colorDataLoading: state.app.get('colorDataLoading'),

    // Filters
  currentColor: state.app.get('currentColor'),
  filteredColors: state.app.get('filteredColors'),
}))
export default class MultiView extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    currentColor: PropTypes.string,
    filteredColors: PropTypes.array,
    dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1, // TODO Pagination in Redux
      tilesPerPage: 10,
    }

    this.onSelectColor = this.onSelectColor.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
   }

  componentDidMount() {
    const { dispatch } = this.props;
    if (!this.props.colorData) {
      dispatch(getColors());
    }
  }

  handleChangePage(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  
  onSelectColor(color) {
    const { dispatch } = this.props;
    dispatch(setCurrentColor(color));
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  render() {
    const { 
      colorData,
      colorDataLoading,
      colorDataError,
      filteredColors,
    } = this.props;
    const tileStyles = { 
      tileDiv: "tile Layout__tile", 
      tileName: "tile__name"
    };

      // Pagination
    const { currentPage, tilesPerPage } = this.state;
    const pageLength = this.props.colorData ? this.props.colorData : 0;
    let indexOfLastTile = currentPage * tilesPerPage;
    let indexOfFirstTile = indexOfLastTile - tilesPerPage;
    let pageNumbers = [];
    let currentTiles;

    for (let i = 1; i <= Math.ceil(103 / this.state.tilesPerPage); i++) {
      pageNumbers.push(i);
    }

    if (filteredColors) {
      currentTiles = filteredColors;
    } else {
      currentTiles = colorData ? colorData.slice(indexOfFirstTile, indexOfLastTile) : '';
    }

    return (
      <div className='Layout__multi-content'>
        { colorDataLoading && <Loading /> }
        { colorDataError && <h1>Error: { colorDataError }</h1> }
        { colorData && currentTiles && 
            currentTiles
              .map((color) => {
                return (
                  <Tile
                    key={ color.hex }
                    color={ color }
                    onSelectColor={ this.onSelectColor }
                    setClass={ tileStyles }
                  />
                );
          })
        }
        <div className="pagination">
          { colorData && !filteredColors &&
              pageNumbers.map(number =>
                <ul className="pagination__page-numbers">
                  <li
                    className={
                      this.state.currentPage === number ? 
                      `pagination__page-numbers-number--active 
                      pagination__page-numbers-number--active` : 
                      `pagination__page-numbers-number`
                    }
                    key={ number }
                    id={ number }
                    onClick={ this.handleChangePage }
                  >
                    { number }
                  </li>
                </ul>
                )
            }
        </div>
      </div>
    );
  }
}
