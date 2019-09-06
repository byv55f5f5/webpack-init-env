import '../css/style.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainReducer from './reducers/MainReducer';
import Layout from './components/Layout';

const store = createStore(MainReducer);
const app = document.getElementById('app');
ReactDom.render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	app,
);
