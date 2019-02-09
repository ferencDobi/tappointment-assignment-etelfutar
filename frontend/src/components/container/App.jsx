import React from 'react';
import '../../styles/App.scss';
import Menu from './Menu';
import Categories from './Categories';

const App = () => (
  <div>
    <h1>Ételfutár</h1>
    <Categories />
    <Menu />
  </div>
);

export default App;
