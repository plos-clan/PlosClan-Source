<script lang="ts">
  import Giscus from '@giscus/svelte'
	import { mode } from "mode-watcher"
</script>

<Giscus
  repo="plos-clan/PlosClan-Source"
  repoId="R_kgDOKgRxiA"
  category="General"
  categoryId="DIC_kwDOKgRxiM4ChzPi"
  mapping="og:title"
  strict="0"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme={mode.current === 'dark' ? 'noborder_gray' : 'light_tritanopia'}
  lang="zh-CN"
  loading="lazy"
/>
