<script>
  import Comment from "../components/Comment.svelte";

  const quotes = [
    {
      id: 1,
      content: "C++ is a son of a bitch",
      author: "UEFIer",
      category: "language",
      date: "2024-09-18",
      likes: 27,
    },
    {
      id: 2,
      content: "rust看着头大，c++还能看懂一点",
      author: "唐",
      category: "bios",
      date: "2024-10-02",
      likes: 35,
    },
    {
      id: 3,
      content: "他母的我tmd根本就不会c和c加加呀。",
      author: "不知道怎么取名的人",
      category: "kernel",
      date: "2024-11-05",
      likes: 42,
    },
    {
      id: 4,
      content: "你C++用来开发什么，好强",
      author: "にゃんと！花火.dllのあおぞらβ诗",
      category: "vm",
      date: "2024-12-22",
      likes: 19,
    },
    {
      id: 5,
      content: "C++标准是哪个傻逼指定的",
      author: "朝人の国企🐟",
      category: "general",
      date: "2025-03-30",
      likes: 31,
    },
    {
      id: 6,
      content: "我们不是在写bug，我们是在创造未记录的特性。",
      author: "群主",
      category: "general",
      date: "2025-06-15",
      likes: 56,
    },
  ];

  const categories = [
    { id: "all", name: "全部" },
    { id: "kernel", name: "内核开发" },
    { id: "language", name: "编程语言" },
    { id: "bios", name: "BIOS/固件" },
    { id: "vm", name: "虚拟机" },
    { id: "general", name: "综合" },
  ];

  let activeCategory = "all";
  let searchQuery = "";

  const sortOptions = [
    { id: "newest", name: "最新" },
    { id: "oldest", name: "最早" },
    { id: "popular", name: "最受欢迎" },
  ];

  let activeSort = "newest";

  const handleCategoryClick = (categoryId) => (activeCategory = categoryId);
  const handleSearchInput = (event) => (searchQuery = event.target.value);
  const handleClearSearch = () => (searchQuery = "");
  const handleSortChange = (event) => (activeSort = event.target.value);

  $: filteredQuotes = quotes
    .filter((quote) => {
      const matchesCategory =
        activeCategory === "all" || quote.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        quote.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quote.author.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (activeSort === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else if (activeSort === "oldest") {
        return new Date(a.date) - new Date(b.date);
      } else if (activeSort === "popular") {
        return b.likes - a.likes;
      }
      return 0;
    });
</script>

<section
  class="bg-amber-50 p-8 text-gray-700 dark:bg-amber-900 dark:text-amber-50"
>
  <h1 class="text-2xl font-bold">逆天言论</h1>
  <p class="mt-2 text-amber-700 dark:text-amber-200">
    收集了我们在低级编程和系统开发过程中的各种有趣、离谱或发人深省的言论。
  </p>

  <!-- Filter, search and sort -->
  <div
    class="mt-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"
  >
    <div class="flex-grow z-10">
      <div class="relative inline-block w-full sm:max-w-96">
        <input
          type="text"
          placeholder="搜索言论..."
          class="w-full rounded-lg border border-amber-200 bg-white px-4 py-2 pr-10 text-gray-700 shadow-sm focus:border-amber-400 focus:outline-none dark:border-amber-700 dark:bg-gray-800 dark:text-gray-200"
          value={searchQuery}
          on:input={handleSearchInput}
        />
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-gray-400 hover:text-amber-600 dark:text-gray-500 dark:hover:text-amber-300"
          on:click={handleClearSearch}
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
            ? 'bg-amber-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
          on:click={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </button>
      {/each}
    </div>

    <select
      class="rounded-lg border border-amber-200 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-amber-400 focus:outline-none dark:border-amber-700 dark:bg-gray-800 dark:text-gray-200"
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
  {#if filteredQuotes.length === 0}
    <div class="rounded-lg bg-gray-100 p-8 text-center dark:bg-gray-800">
      <p class="text-lg text-gray-600 dark:text-gray-400">
        没有找到符合条件的言论
      </p>
    </div>
  {:else}
    <div class="space-y-4">
      {#each filteredQuotes as quote}
        <div
          class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
        >
          <blockquote
            class="border-l-4 border-amber-500 pl-4 italic text-gray-700 dark:text-gray-300"
          >
            "{quote.content}"
          </blockquote>

          <div class="mt-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="font-medium text-gray-800 dark:text-gray-200"
                >— {quote.author}</span
              >
              <span class="ml-2 text-sm text-gray-500 dark:text-gray-400"
                >{quote.date}</span
              >
              <span
                class="ml-2 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200"
              >
                {categories.find((c) => c.id === quote.category)?.name ||
                  quote.category}
              </span>
            </div>

            <button
              class="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-amber-100 hover:text-amber-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-amber-800 dark:hover:text-amber-200"
            >
              <span>👍</span>
              <span>{quote.likes}</span>
            </button>
          </div>
        </div>
      {/each}
    </div>

    <div
      class="mt-10 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 p-6 text-white shadow-md dark:from-amber-600 dark:to-yellow-700"
    >
      <h2 class="text-xl font-bold">有什么值得分享的逆天言论？</h2>
      <p class="mt-2">
        如果你在开发过程中有什么有趣或深刻的言论，欢迎提交给我们！
      </p>
    </div>
  {/if}
</div>

<Comment />
