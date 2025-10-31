<script>
import Comment from "../components/Comment.svelte";

// Sample resources data structure - to be replaced with actual data
const resourceCategories = [
  {
    id: 1,
    name: "操作系统",
    description: "内核、操作系统和BIOS开发的资源",
    resources: [
      {
        id: 101,
        title: "NVM Express Base Specification",
        description: "从官网扒下来的NVMe文档，想做NVMe驱动的看这个",
        fileSize: "4.2 MB",
        downloadUrl: "#",
        dateAdded: "2024-10-15",
      },
      {
        id: 102,
        title: "Rust 嵌入式开发教程",
        description: "使用Rust进行裸机编程和内核开发的入门指南",
        fileSize: "2.8 MB",
        downloadUrl: "#",
        dateAdded: "2025-04-02",
      },
    ],
  },
  {
    id: 2,
    name: "编译原理",
    description: "构建自己的编程语言和编译器的资源",
    resources: [
      {
        id: 201,
        title: "龙书",
        description: "没什么好说的，史😋",
        fileSize: "1.5 MB",
        downloadUrl: "#",
        dateAdded: "2024-09-20",
      },
    ],
  },
];

// State variables
let searchQuery = "";
let activeCategory = null;

const handleSearchInput = (event) => (searchQuery = event.target.value);
const handleClearSearch = () => (searchQuery = "");
const handleCategoryClick = (id) =>
  (activeCategory = activeCategory === id ? null : id);

$: filteredCategories = resourceCategories
  .map((category) => {
    if (activeCategory !== null && category.id !== activeCategory) {
      return { ...category, resources: [] };
    }

    const filteredResources = category.resources.filter((resource) => {
      if (searchQuery === "") return true;
      return (
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    return { ...category, resources: filteredResources };
  })
  .filter(
    (category) => category.resources.length > 0 || activeCategory === null,
  );
</script>

<section
  class="bg-cyan-50 p-8 text-gray-700 dark:bg-cyan-900 dark:text-cyan-50"
>
  <h1 class="text-2xl font-bold">资源下载</h1>
  <p class="mt-2 text-cyan-700 dark:text-cyan-200">
    这里收集了各种与编程相关的资源，包括系统开发、语言实现等各个方面。
  </p>

  <div
    class="mt-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"
  >
    <div class="grow z-10">
      <div class="relative inline-block w-full sm:max-w-96">
        <input
          type="text"
          placeholder="搜索资源..."
          class="w-full rounded-lg border border-cyan-200 bg-white px-4 py-2 pr-10 text-gray-700 shadow-sm focus:border-cyan-400 focus:outline-none dark:border-cyan-700 dark:bg-gray-800 dark:text-gray-200"
          value={searchQuery}
          on:input={handleSearchInput}
        />
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-gray-400 hover:text-cyan-600 dark:text-gray-500 dark:hover:text-cyan-300"
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
      <button
        class="rounded-full px-3 py-1 text-sm font-medium transition-colors {activeCategory ===
        null
          ? 'bg-cyan-600 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
        on:click={() => (activeCategory = null)}
      >
        全部
      </button>

      {#each resourceCategories as category}
        <button
          class="rounded-full px-3 py-1 text-sm font-medium transition-colors {activeCategory ===
          category.id
            ? 'bg-cyan-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
          on:click={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </button>
      {/each}
    </div>
  </div>
</section>

<div class="mx-auto my-8 max-w-5xl px-4">
  {#if filteredCategories.length === 0}
    <div class="rounded-lg bg-gray-100 p-8 text-center dark:bg-gray-800">
      <p class="text-lg text-gray-600 dark:text-gray-400">
        没有找到符合条件的资源
      </p>
    </div>
  {:else}
    {#each filteredCategories as category}
      <div class="mb-10">
        <h2 class="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
          {category.name}
        </h2>
        <p class="mb-4 text-gray-600 dark:text-gray-400">
          {category.description}
        </p>

        <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {#each category.resources as resource}
            <div
              class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div class="flex flex-col justify-between gap-4">
                <div>
                  <h3
                    class="text-lg font-medium text-gray-800 dark:text-gray-200"
                  >
                    {resource.title}
                  </h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-400">
                    {resource.description}
                  </p>
                </div>

                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-500 dark:text-gray-500">
                    <span>大小: {resource.fileSize}</span>
                    <span class="mx-2">•</span>
                    <span>日期: {resource.dateAdded}</span>
                  </div>

                  <a
                    href={resource.downloadUrl}
                    class="rounded-lg bg-cyan-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-600"
                  >
                    下载
                  </a>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  {/if}
</div>

<Comment />
