/* @refresh reload */
import './index.css'

import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import { MetaProvider } from '@solidjs/meta'
import App from './App'

const Root = () => (
  <MetaProvider>
    <Router>
      <App />
    </Router>
  </MetaProvider>
)

render(() => <Root />, document.getElementById('root')!)
