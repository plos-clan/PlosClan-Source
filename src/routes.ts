import { lazy } from 'solid-js'
import type { RouteDefinition } from '@solidjs/router'

import Home from './pages/Home'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/resources',
    component: lazy(() => import('./pages/Resources'))
  },
  {
    path: '/words',
    component: lazy(() => import('./pages/Words'))
  },
  {
    path: '/posts',
    component: lazy(() => import('./pages/Posts'))
  },
  {
    path: '/projects',
    component: lazy(() => import('./pages/Projects'))
  },
  {
    path: '/dress',
    component: lazy(() => import('./pages/Dress'))
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/About'))
  },
  {
    path: '**',
    component: lazy(() => import('./pages/404'))
  }
]
