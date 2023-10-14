/* @refresh reload */
import './index.css'

import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import App from './App'

const Root = () => (
  <Router>
    <App />
  </Router>
)

render(() => <Root />, document.getElementById('root')!)
