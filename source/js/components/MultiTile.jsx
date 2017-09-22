import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Tile = ({ color, onSelectColor, value, setClass }) => {
  const { hex, id } = color;
  const { tileDiv, tileName } = setClass;
  const divColor = {
    backgroundColor: `${hex}`
  };

  return (
    <Link 
      to={`/color/${id}`}
      style={ divColor }
      className={ tileDiv }
      onClick={() => onSelectColor(color) }
      >
      <div className={ tileName }>
        <h3>{ hex }</h3>
      </div>
    </Link>
  );
};

export default Tile;