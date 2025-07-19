<script>
  import siteTitleMap from "../assets/title_map.json";

  const websiteName = "OS 群网站";

  const titleObject = Object.fromEntries(
    siteTitleMap.map(({ href, title }) => [href, title]),
  );

  $: pageTitle = titleObject[window.location.pathname] || "页面未找到";
</script>

<svelte:head>
  <title>{pageTitle} | {websiteName}</title>
  <meta property="og:title" content={pageTitle} />
</svelte:head>
