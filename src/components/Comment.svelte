<script lang="ts">
  import Giscus from "@giscus/svelte";
  import { mode } from "mode-watcher";
</script>

<div class="mx-auto my-4 mt-12 max-w-screen-md px-4">
  <div class="mx-auto my-8 max-w-screen-lg">
    <div class="flex items-center justify-center">
      <div class="h-px w-1/3 bg-gray-300 dark:bg-gray-600"></div>
      <span class="mx-4 text-gray-500 dark:text-gray-400">讨论区</span>
      <div class="h-px w-1/3 bg-gray-300 dark:bg-gray-600"></div>
    </div>
  </div>
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
    theme={mode.current === "dark" ? "noborder_gray" : "light_tritanopia"}
    lang="zh-CN"
    loading="lazy"
  />
</div>
