<script>
  import Comment from '../components/Comment.svelte';

  let count = $state(0);
</script>

<section class="bg-gray-100 p-8 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
  <h1 class="text-2xl font-bold">Home</h1>
  <p class="mt-4">这不是首页，这是一个计数器</p>

  <div class="mt-4 flex items-center space-x-2">
    <button
      class="rounded-lg border border-gray-900 px-2 dark:border-gray-500"
      onclick={() => count--}
    >
      -
    </button>

    <output class="p-2">Count: {count}</output>

    <button
      class="rounded-lg border border-gray-900 px-2 dark:border-gray-500"
      onclick={() => count++}
    >
      +
    </button>
  </div>
</section>

<div class="mx-auto my-4 mt-8 max-w-screen-md px-4">
  <Comment />
</div>
