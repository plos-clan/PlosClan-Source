<script>
  import Comment from "../components/Comment.svelte";

  const projects = [
    {
      id: 1,
      title: "傻逼内核",
      description: "一个傻逼的x86_64架构内核，支持基础内存分页",
      category: "kernel",
      technologies: ["Rust", "Assembly", "UEFI"],
      image: "https://placehold.co/600x400/e9d5ff/1e293b?text=内核示例",
      github: "#",
      creators: ["老八", "丁真珍珠"],
    },
    {
      id: 2,
      title: "CYaRon",
      description: "洛谷神题，打榜专用，包含LL(1)解析器和字节码虚拟机",
      category: "language",
      technologies: ["C", "高性能", "暴力"],
      image: "https://placehold.co/600x400/e9d5ff/1e293b?text=语言编译器",
      github: "#",
      creators: ["黑手"],
    },
  ];

  const categories = [
    { id: "all", name: "全部" },
    { id: "kernel", name: "内核开发" },
    { id: "language", name: "编程语言" },
    { id: "vm", name: "虚拟机" },
  ];

  let activeCategory = "all";
  let searchQuery = "";

  const handleSearchInput = (event) => (searchQuery = event.target.value);
  const handleClearSearch = () => (searchQuery = "");
  const handleCategoryClick = (categoryId) => (activeCategory = categoryId);

  $: filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    return matchesCategory && matchesSearch;
  });
</script>

<section
  class="bg-indigo-50 p-8 text-gray-700 dark:bg-indigo-900 dark:text-indigo-50"
>
  <h1 class="text-2xl font-bold">推荐项目</h1>
  <p class="mt-2 text-indigo-700 dark:text-indigo-200">
    我们创造了许多令人惊叹的低级软件项目，从操作系统内核到编程语言实现。
  </p>

  <!-- Filter and search -->
  <div
    class="mt-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"
  >
    <div class="flex-grow z-10">
      <div class="relative inline-block w-full sm:max-w-96">
        <input
          type="text"
          placeholder="搜索项目..."
          class="w-full rounded-lg border border-indigo-200 bg-white px-4 py-2 pr-10 text-gray-700 shadow-sm focus:border-indigo-400 focus:outline-none dark:border-indigo-700 dark:bg-gray-800 dark:text-gray-200"
          value={searchQuery}
          on:input={handleSearchInput}
        />
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-gray-400 hover:text-indigo-600 dark:text-gray-500 dark:hover:text-indigo-300"
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
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
          on:click={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </button>
      {/each}
    </div>
  </div>
</section>

<div class="mx-auto my-8 max-w-screen-lg px-4">
  {#if filteredProjects.length === 0}
    <div class="rounded-lg bg-gray-100 p-8 text-center dark:bg-gray-800">
      <p class="text-lg text-gray-600 dark:text-gray-400">
        没有找到符合条件的项目
      </p>
    </div>
  {:else}
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {#each filteredProjects as project}
        <div
          class="rounded-lg border border-gray-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
        >
          <img
            src={project.image}
            alt={project.title}
            class="h-48 w-full object-cover"
          />
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">
              {project.title}
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
              {#each project.technologies as tech}
                <span
                  class="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                >
                  {tech}
                </span>
              {/each}
            </div>

            <div class="mt-4 flex items-center justify-between">
              <div class="text-sm text-gray-500 dark:text-gray-400">
                作者: {project.creators.join(", ")}
              </div>

              <a
                href={project.github}
                class="rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600"
              >
                查看项目
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <!-- Project submission CTA -->
  <div
    class="mt-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white shadow-md dark:from-indigo-600 dark:to-purple-700"
  >
    <h2 class="text-xl font-bold">有想要展示的项目？</h2>
    <p class="mt-2">
      你想把你的大作或答辩放上来吗？请自己到Github编辑这个页面。
    </p>
  </div>
</div>

<Comment />
