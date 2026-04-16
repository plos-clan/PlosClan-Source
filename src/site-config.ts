export interface SitePageMeta {
  order: number
  showInNav: boolean
  title: string
}

export const SITE_NAME = 'OS 群网站'

export const PAGES = {
  '/': {
    order: 1,
    showInNav: true,
    title: '首页'
  },
  '/resources': {
    order: 2,
    showInNav: true,
    title: '资源下载'
  },
  '/words': {
    order: 3,
    showInNav: true,
    title: '逆天言论'
  },
  '/posts': {
    order: 4,
    showInNav: true,
    title: '整活贴吧'
  },
  '/projects': {
    order: 5,
    showInNav: true,
    title: '推荐项目'
  },
  '/dress': {
    order: 6,
    showInNav: true,
    title: '群主女装'
  },
  '/about': {
    order: 7,
    showInNav: true,
    title: '关于'
  },
  '/404': {
    order: 8,
    showInNav: false,
    title: '404'
  }
} as const satisfies Record<string, SitePageMeta>

export type SiteHref = keyof typeof PAGES
export type SitePage = (typeof PAGES)[SiteHref]

export const NAV_PAGES = (Object.entries(PAGES) as [SiteHref, SitePage][])
  .filter(([, page]) => page.showInNav)
  .sort(([, left], [, right]) => left.order - right.order)
  .map(([href, page]) => ({href, ...page}))
