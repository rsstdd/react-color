import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tile from '../../components/MultiTile';
import Loading from '../../components/Loading';
import { getColors, setCurrentColor } from '../../actions/colorAction';

@connect(state => ({
  colorData: state.app.get('colorData'),
  colorDataError: state.app.get('colorDataError'),
  colorDataLoading: state.app.get('colorDataLoading'),
  currentColor: state.app.get('currentColor'),
  filterColor: state.app.get('filterColor'),
}))
export default class MultiView extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    currentColor: PropTypes.object,
    filterColor: PropTypes.func,
    dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
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
  
  componentWillReceiveProps(nextProps) {
    if (this.props.colorData != nextProps.colorData) {
      this.setState({colorData: Object.assign({}, nextProps.colorData)});
    }
  }
  
  handleChangePage(event) {
    this.setState({
      currentPage: Number(event.target.id),
      // tilesPerPage: 10,
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
    console.log(this.state);
    const { 
      colorData,
      colorDataLoading,
      colorDataError,
      filterColor 
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
    let currentTiles = colorData ? colorData.slice(indexOfFirstTile, indexOfLastTile) : '';
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(103 / this.state.tilesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className='Layout__multi-content'>
        { colorDataLoading && <Loading /> }
        { colorDataError && <h1>Error: { colorDataError }</h1> }
        { colorData && currentTiles && 
            currentTiles
              // .filter(item => item.color === filterColor ||  null === filterColor)
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
          { colorData && 
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
