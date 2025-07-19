<script>
  import Meta from './components/Meta'
  import Header from './components/Header.svelte'

  import { routes, routerConfig } from './routes'
  import { Router } from "@mateothegreat/svelte5-router"
</script>

<Meta />

<!-- <header>
  <nav>
    <a href="/">主页</a>
    <a href="/resources">资源</a>
    <a href="/about">关于</a>
  </nav>
</header> -->

<Header />

<main>
  <Router {routes} {...routerConfig} />
</main>

<footer>
</footer>
