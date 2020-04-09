import React from 'react';
import './NotFound.css'

const Error = ({error}) => {
  return (
    <div className="NotFoundWrapper">
      <span className="NotfoundIcon">
        <img src="https://img.icons8.com/cute-clipart/64/000000/sad.png" alt="CarlosS" />
      </span>
  <span className="NotFoundText">{error}</span>
    </div>
  );
};

export default Error;
