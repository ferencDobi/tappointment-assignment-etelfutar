import React from 'react';
import '../../styles/App.scss';
import Menu from './Menu';
import Categories from './Categories';
import Cart from './Cart';

const App = () => (
  <div>
    <h1>Ételfutár</h1>
    <Categories />
    <Menu />
    <Cart />
  </div>
);

export default App;
