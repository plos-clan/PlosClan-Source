<script>
import Meta from './components/Meta.svelte';
import Header from './components/Header.svelte';
import { routes, routerConfig } from './routes';
import { Router } from "@mateothegreat/svelte5-router";
import { ModeWatcher } from "mode-watcher";
</script>

<Meta />
<ModeWatcher />

<Header />
<Router {routes} {...routerConfig} />
