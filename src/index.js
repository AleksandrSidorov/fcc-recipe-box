import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as reduxFormReducer } from 'redux-form'

import App from './components/App';

const initialRecipes = [
  {title: "Cheese omelette", ingredients: ["Eggs", "Olive oil", "Cheddar cheese"]},
  {title: "Pancakes", ingredients: ["Flour", "Milk", "Eggs", "Butter"]},
  {title: "Salad", ingredients: ["Cucumber", "Tomatoe", "Onion", "Olive oil"]}
];

const reducer = combineReducers({
  form: reduxFormReducer,
  recipes: null
})

let store = createStore(reducer, { form: {}, recipes: initialRecipes },
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
  document.getElementById('root')
);
