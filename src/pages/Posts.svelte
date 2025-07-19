<script>
  import Comment from "../components/Comment.svelte";

  // Sample posts data structure - to be replaced with actual posts
  const posts = [
    {
      id: 1,
      title: "手写LL(1)解析器的挑战与乐趣",
      content:
        "为了更深入理解编译原理，我尝试了手写一个LL(1)解析器，这里是我的经验...",
      author: "老八",
      category: "编程语言",
      date: "2024-09-18",
      likes: 4,
      comments: 2,
      tags: ["编译器", "解析器", "语法分析"],
    },
    {
      id: 2,
      title: "从零开始实现一个寄存器虚拟机",
      content:
        "最近完成了一个简单的基于寄存器的虚拟机实现，性能比之前的栈虚拟机有了明显提升...",
      author: "丁真珍珠",
      category: "虚拟机",
      date: "2025-01-05",
      likes: 8,
      comments: 1,
      tags: ["虚拟机", "JIT", "性能优化"],
    },
  ];

  const categories = [
    { id: "all", name: "全部" },
    { id: "编程语言", name: "编程语言" },
    { id: "虚拟机", name: "虚拟机" },
    { id: "其他", name: "其他" },
  ];

  let activeCategory = "all";
  let searchQuery = "";

  const sortOptions = [
    { id: "newest", name: "最新" },
    { id: "popular", name: "最热门" },
    { id: "comments", name: "评论最多" },
  ];

  let activeSort = "newest";

  $: filteredPosts = posts
    .filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (activeSort === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else if (activeSort === "popular") {
        return b.likes - a.likes;
      } else if (activeSort === "comments") {
        return b.comments - a.comments;
      }
      return 0;
    });

  const handleSearchInput = (event) => (searchQuery = event.target.value);
  const handleSortChange = (event) => (activeSort = event.target.value);
  const handleCategoryClick = (categoryId) => (activeCategory = categoryId);
</script>

<section
  class="bg-purple-100 p-8 text-gray-700 dark:bg-purple-900 dark:text-purple-50"
>
  <h1 class="text-2xl font-bold">整活贴吧</h1>
  <p class="mt-2 text-purple-700 dark:text-purple-200">
    这里是我们交流和分享低级编程经验、心得和问题的地方。
  </p>

  <!-- Filter, search and sort -->
  <div
    class="mt-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"
  >
    <div class="flex-grow z-10">
      <div class="relative inline-block w-full sm:max-w-96">
        <input
          type="text"
          placeholder="搜索帖子..."
          class="w-full rounded-lg border border-purple-200 bg-white px-4 py-2 pr-10 text-gray-700 shadow-sm focus:border-purple-400 focus:outline-none dark:border-purple-700 dark:bg-gray-800 dark:text-gray-200"
          value={searchQuery}
          on:input={handleSearchInput}
        />
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-gray-400 hover:text-purple-600 dark:text-gray-500 dark:hover:text-purple-300"
          on:click={() => (searchQuery = "")}
        >
          {#if searchQuery}
            ✕
          {:else}
            🔍
          {/if}
        </button>
      </div>
    </div>

    <div class="flex flex-wrap gap-2">
      {#each categories as category}
        <button
          class="rounded-full px-3 py-1 text-sm font-medium transition-colors {activeCategory ===
          category.id
            ? 'bg-purple-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
          on:click={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </button>
      {/each}
    </div>

    <select
      class="rounded-lg border border-purple-200 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-purple-400 focus:outline-none dark:border-purple-700 dark:bg-gray-800 dark:text-gray-200"
      value={activeSort}
      on:change={handleSortChange}
    >
      {#each sortOptions as option}
        <option value={option.id}>{option.name}</option>
      {/each}
    </select>
  </div>
</section>

<div class="mx-auto my-8 max-w-screen-lg px-4">
  {#if filteredPosts.length === 0}
    <div class="rounded-lg bg-gray-100 p-8 text-center dark:bg-gray-800">
      <p class="text-lg text-gray-600 dark:text-gray-400">
        没有找到符合条件的帖子
      </p>
    </div>
  {:else}
    <div class="space-y-6">
      {#each filteredPosts as post}
        <div
          class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
        >
          <div class="mb-3 flex items-center justify-between">
            <div>
              <span class="font-medium text-gray-800 dark:text-gray-200"
                >{post.author}</span
              >
              <span class="ml-2 text-sm text-gray-500 dark:text-gray-400"
                >{post.date}</span
              >
              <span
                class="ml-2 rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200"
              >
                {post.category}
              </span>
            </div>
          </div>

          <h2 class="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
            {post.title}
          </h2>

          <p class="text-gray-600 dark:text-gray-400">
            {post.content}
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            {#each post.tags as tag}
              <span
                class="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                #{tag}
              </span>
            {/each}
          </div>

          <div
            class="mt-4 flex items-center space-x-4 text-gray-500 dark:text-gray-400"
          >
            <button
              class="flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-300"
            >
              <span>👍</span>
              <span>{post.likes}</span>
            </button>
            <button
              class="flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-300"
            >
              <span>💬</span>
              <span>{post.comments}</span>
            </button>
            <button
              class="ml-auto hover:text-purple-600 dark:hover:text-purple-300"
            >
              查看详情
            </button>
          </div>
        </div>
      {/each}
    </div>

    <!-- Pagination -->
    <div class="mt-8 flex justify-center">
      <nav class="flex items-center space-x-1">
        <button
          class="rounded-md px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        >
          &lt;
        </button>
        <button
          class="rounded-md bg-purple-100 px-3 py-1.5 text-sm text-purple-700 dark:bg-purple-900 dark:text-purple-200"
        >
          1
        </button>
        <button
          class="rounded-md px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        >
          2
        </button>
        <button
          class="rounded-md px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        >
          3
        </button>
        <button
          class="rounded-md px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        >
          &gt;
        </button>
      </nav>
    </div>
  {/if}
</div>

<Comment />
