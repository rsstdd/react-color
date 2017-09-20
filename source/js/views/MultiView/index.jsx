import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tile from '../../components/MultiTile';
import Pagination from '../../components/Pagination';

@connect(state => ({
  colorData: state.app.get('colorData')
  // pageOfItems: state.app.get('pageOfItems')
}))
export default class MultiView extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    // from react-redux connect
    dispatch: PropTypes.func,
  }
  
  constructor(props) {
    super(props);
    
    this.state = {
      pageOfItems: []
    }
  }
  
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    console.log(this.props);
    const tiles = this.props.colorData.map((color) => {
      return (
        <Tile 
          key={color.hex}
          color={color}
        />
      );
    });

    return (
      <div className='Layout__content'>
        { tiles }
        
        <div>
          <div className="container">
            <div className="text-center">
              {
                this.state.pageOfItems.map((item) =>
                  <div key={item.id}>{item.name}</div>
                )
              }
              <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
