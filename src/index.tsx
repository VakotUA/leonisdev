import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>
)
