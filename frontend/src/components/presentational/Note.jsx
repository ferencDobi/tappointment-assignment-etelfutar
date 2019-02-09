import React from 'react';

export const Note = ({ title, children }) => (
  <div class="paper">
    <div class="lines">
      <img src="http://www.pngmart.com/files/3/Pushpin-PNG-Photos.png" alt="" />
      <h3 class="title">{title}</h3>
      <div class="text">{children}</div>
    </div>
  </div>
);