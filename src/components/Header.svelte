<script lang="ts">
  import Logo from '../assets/logo.jpg';
  import siteTitleMap from '../assets/title_map.json';
</script>

{#snippet headerLogo()}
  <a href="/" class="my-3 ml-3 mr-4">
    <img
      class="h-6 rounded-full"
      src={Logo}
      alt="TE Logo"
      loading="lazy"
    />
  </a>
{/snippet}

{#snippet headerLink({ href, title }: { href: string; title: string })}
  <li class="mb-0 pr-2" data-te-nav-item-ref>
    <a
      {href}
      class="px-2 text-neutral-500 no-underline hover:text-neutral-700 hover:underline"
      data-te-nav-link-ref
    >
      {title}
    </a>
  </li>
{/snippet}

<nav class="relative w-full px-3 py-2 shadow-md">
  <div class="flex items-center" data-te-collapse-item>
    {@render headerLogo()}

    <ul class="mr-auto flex flex-row" data-te-navbar-nav-ref>
      {#each siteTitleMap.slice(1, -1) as item (item.href)}
        {@render headerLink(item)}
      {/each}
    </ul>
  </div>
</nav>
