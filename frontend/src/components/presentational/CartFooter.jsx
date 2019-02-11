import React, { Fragment } from 'react';

export const CartFooter = ({ total, action }) => (
  <Fragment>
    <div className="text-line end"><p>{total} Ft</p></div>
    <div className="action-buttons">
      <button type="button">Elküldés</button>
      <button type="button" onClick={action.handler}>{action.name}</button>
    </div>
  </Fragment>
);