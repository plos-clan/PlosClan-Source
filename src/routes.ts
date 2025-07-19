import { StatusCode } from "@mateothegreat/svelte5-router"

export const routes = [
  {
    component: async () => import('./pages/Home.svelte')
  },
  {
    path: "resources",
    component: async () => import('./pages/Resources.svelte')
  },
  {
    path: "words",
    component: async () => import('./pages/Words.svelte')
  },
  {
    path: "posts",
    component: async () => import('./pages/Posts.svelte')
  },
  {
    path: "projects",
    component: async () => import('./pages/Projects.svelte')
  },
  {
    path: "dress",
    component: async () => import('./pages/Dress.svelte')
  },
  {
    path: "about",
    component: async () => import('./pages/About.svelte')
  }
]

export const routerConfig = {
  statuses: {
    [StatusCode.NotFound]: () => ({
      component: async () => import('./pages/404.svelte')
    })
  }
}
