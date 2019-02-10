import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './helpers/store';
import './styles/index.scss';
import App from './components/container/App';
import * as serviceWorker from './serviceWorker';
import { fetchMeals } from "./actions/mealActions";

const store = configureStore({});
store.dispatch(fetchMeals());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
