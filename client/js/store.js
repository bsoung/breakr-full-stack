const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunk = require('redux-thunk').default
const reducers = require('./reducers/reducers')

const store = createStore(reducers, applyMiddleware(thunk))

module.exports = store