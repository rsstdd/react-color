import React, { Component } from 'react';

const Tile = ({ color }) => {
  const { hex } = color;
  const divColor = {
    backgroundColor: `${hex}`
  };

  if (!color) {
    return <div>Loading....</div>
  }

  return (
    <div className="tile Layout__tile" style={ divColor }>
      <div className="tile__name">
        <h3>{ hex }</h3>
      </div>
    </div>
  );
};

export default Tile;



// styles={{backgroundColor:`${hex}`}}