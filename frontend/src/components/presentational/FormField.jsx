import React, {Fragment} from 'react';

export const FormField = ({field, changeHandler}) => {
  let {title, name, value, type, required} = field;

  return (
    <Fragment>
      <label htmlFor={name}>{title}:</label>
      <input type={type} id={name} name={name} value={value} 
             onChange={changeHandler} required={required} />
    </Fragment>
  );
};