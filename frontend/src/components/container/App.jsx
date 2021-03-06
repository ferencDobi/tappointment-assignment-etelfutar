import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import Header from './Header';
import Cart from './Cart';
import UserForm from './UserForm';

const App = ({ authenticated }) => (
  <div>
    <Header />
    <Menu />
    {authenticated ? <Cart /> : <UserForm />}
  </div>
);

const mapStateToProps = ({ session }) => {
  return { authenticated: Boolean(session) };
};

export default connect(mapStateToProps)(App);
