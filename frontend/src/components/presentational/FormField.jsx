import React, { Fragment } from 'react';

export const FormField = ({ field, changeHandler }) => {
  let { title, name, value, type, error, required } = field;

  return (
    <Fragment>
      <label htmlFor={name}>{title}:</label>
      <input type={type} id={name} name={name} value={value} maxlength="100"
             onChange={changeHandler} required={required} />
      {error && <p className={'error-message ' + name}>{error}</p>}
    </Fragment>
  );
};