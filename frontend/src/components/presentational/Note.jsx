import React from 'react';

export const Note = ({ title, children, className = '' }) => (
  <div className={className + ' paper'}>
    <div className="lines">
      <img src="http://www.pngmart.com/files/3/Pushpin-PNG-Photos.png" alt="" />
      <h3 className="title">{title}</h3>
      <div className="text">{children}</div>
    </div>
  </div>
);