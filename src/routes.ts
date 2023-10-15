import { lazy } from 'solid-js'
import type { RouteDefinition } from '@solidjs/router'

type PageDefinition = {
  path: string,
  componentPath: string,
}

const pageList: PageDefinition[] = [
  { path: '/', componentPath: './pages/Home' },
  { path: '/resources', componentPath: './pages/Resources' },
  { path: '/words', componentPath: './pages/Words' },
  { path: '/posts', componentPath: './pages/Posts' },
  { path: '/projects', componentPath: './pages/Projects' },
  { path: '/dress', componentPath: './pages/Dress' },
  { path: '/about', componentPath: './pages/About' },
  { path: '**', componentPath: './pages/404' }
]

export const routes: RouteDefinition[] = pageList.map((page) => {
  return {
    path: page.path,
    component: lazy(() => import( /* @vite-ignore */ page.componentPath))
  }
})
