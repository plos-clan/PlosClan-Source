<script>
import { onMount, onDestroy } from "svelte";
import siteTitleMap from "../assets/title_map.json";

const websiteName = "OS 群网站";

const titleObject = Object.fromEntries(
  siteTitleMap.map(({ href, title }) => [href, title]),
);

let pageTitle = "";

let originalPushState;
let originalReplaceState;

const updatePageTitle = () => {
  const path = window.location.pathname;
  pageTitle = titleObject[path] || "页面未找到";
};

onMount(() => {
  updatePageTitle();
  window.addEventListener("popstate", updatePageTitle);

  originalPushState = history.pushState;
  originalReplaceState = history.replaceState;

  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    updatePageTitle();
  };

  history.replaceState = function (...args) {
    originalReplaceState.apply(this, args);
    updatePageTitle();
  };
});

onDestroy(() => {
  window.removeEventListener("popstate", updatePageTitle);

  if (originalPushState) {
    history.pushState = originalPushState;
  }
  if (originalReplaceState) {
    history.replaceState = originalReplaceState;
  }
});
</script>

<svelte:head>
  <title>{pageTitle} | {websiteName}</title>
  <meta property="og:title" content={pageTitle} />
</svelte:head>
