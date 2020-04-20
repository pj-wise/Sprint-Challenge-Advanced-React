import React from 'react';

const DataCard = (props) => {
  return (
    <div data-testid='card' className='data-card'>
      <h3>{props.data.name}</h3>
      <h4>{props.data.country}</h4>
      <h5>searches: {props.data.searches}</h5>
    </div>
  );
};

export default DataCard;
