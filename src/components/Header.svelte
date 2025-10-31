<script lang="ts">
import { active, route } from "@mateothegreat/svelte5-router";
import { mode, toggleMode } from "mode-watcher";
import { fly } from "svelte/transition";
import Logo from "../assets/logo.jpg";
import siteTitleMap from "../assets/title_map.json";

let isMobileMenuOpen = false;
const mobileMenuToggle = () => (isMobileMenuOpen = !isMobileMenuOpen);
</script>

{#snippet headerLogo()}
  <a href="/" use:route class="my-3 ml-3 mr-4 shrink-0">
    <img class="h-8 w-8 rounded-full" src={Logo} alt="Logo" />
  </a>
{/snippet}

{#snippet headerLink({ href, title }: { href: string; title: string })}
  <li class="w-full md:w-auto">
    <a
      {href}
      class="block rounded-md px-3 py-2 text-neutral-600 no-underline transition hover:bg-gray-200 hover:text-neutral-800 dark:text-neutral-300 dark:hover:bg-slate-700 dark:hover:text-neutral-100"
      on:click={() => (isMobileMenuOpen = false)}
      use:route
      use:active={{ active: { class: ["font-bold"] } }}
    >
      {title}
    </a>
  </li>
{/snippet}

{#snippet navLinks()}
  <ul
    class="flex list-none flex-col space-y-1 p-2 md:flex-row md:space-x-1 md:space-y-0 md:p-0"
  >
    {#each siteTitleMap.slice(1, -1) as item (item.href)}
      {@render headerLink(item)}
    {/each}
  </ul>
{/snippet}

<nav class="relative w-full bg-white px-2 shadow-md dark:bg-slate-800 sm:px-4">
  <div class="mx-auto flex h-16 items-center justify-between">
    <div class="flex items-center">
      {@render headerLogo()}
      <div class="hidden md:flex">{@render navLinks()}</div>
    </div>

    <div class="flex items-center gap-2">
      <button
        on:click={toggleMode}
        aria-label="Toggle theme"
        class="rounded-full p-2 text-neutral-600 transition hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-slate-700"
      >
        {#if mode.current === "light"}
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"
            ><path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z"
            /></svg
          >
        {:else if mode.current === "dark"}
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"
            ><path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            /></svg
          >
        {/if}
      </button>

      <div class="md:hidden">
        <button
          on:click={mobileMenuToggle}
          class="rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-slate-700"
          aria-label="Toggle navigation menu"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-4 6h10"
            /></svg
          >
        </button>
      </div>
    </div>
  </div>

  {#if isMobileMenuOpen}
    <div
      class="absolute left-0 right-0 border-t border-gray-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 md:hidden z-50"
      transition:fly={{ y: -10, duration: 200 }}
    >
      {@render navLinks()}
    </div>
  {/if}
</nav>
