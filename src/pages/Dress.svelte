<script>
  import Comment from "../components/Comment.svelte";

  // Sample gallery data structure - to be replaced with actual content
  const galleryItems = [
    {
      id: 1,
      title: "装扮展示 1",
      description: "群主的第一套装扮，拍摄于2023年春季活动",
      imageUrl: "https://placehold.co/600x800/ffccd5/1e293b?text=群主装扮照片",
      date: "2023-03-15",
      likes: 42,
      tags: ["春季", "活动装"],
    },
    {
      id: 2,
      title: "装扮展示 2",
      description: "参加技术交流会的特别装扮",
      imageUrl: "https://placehold.co/600x800/ffccd5/1e293b?text=群主装扮照片",
      date: "2023-06-20",
      likes: 38,
      tags: ["夏季", "正式装"],
    },
    {
      id: 3,
      title: "装扮展示 3",
      description: "为庆祝项目完成的特别装扮",
      imageUrl: "https://placehold.co/600x800/ffccd5/1e293b?text=群主装扮照片",
      date: "2023-09-05",
      likes: 56,
      tags: ["秋季", "庆祝装"],
    },
    {
      id: 4,
      title: "装扮展示 4",
      description: "年末聚会的节日主题装扮",
      imageUrl: "https://placehold.co/600x800/ffccd5/1e293b?text=群主装扮照片",
      date: "2023-12-18",
      likes: 47,
      tags: ["冬季", "节日装"],
    },
  ];

  // View mode options
  const viewModes = [
    { id: "grid", name: "网格视图" },
    { id: "list", name: "列表视图" },
  ];

  let activeViewMode = "grid";

  // Sort options
  const sortOptions = [
    { id: "newest", name: "最新" },
    { id: "oldest", name: "最早" },
    { id: "popular", name: "最受欢迎" },
  ];

  let activeSort = "newest";

  // Filter by tag
  let activeTag = null;

  $: allTags = [...new Set(galleryItems.flatMap((item) => item.tags))];

  // Filter and sort gallery items
  $: displayItems = galleryItems
    .filter((item) => activeTag === null || item.tags.includes(activeTag))
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

  // Modal functionality for enlarged view
  let selectedItem = null;

  function openModal(item) {
    selectedItem = item;
  }

  function closeModal() {
    selectedItem = null;
  }

  // Handler functions for events
  function handleTagClick(tag) {
    activeTag = activeTag === tag ? null : tag;
  }

  function handleViewModeClick(mode) {
    activeViewMode = mode;
  }

  function handleSortChange(event) {
    activeSort = event.target.value;
  }
</script>

<section
  class="bg-rose-100 p-8 text-gray-700 dark:bg-rose-900 dark:text-rose-50"
>
  <h1 class="text-2xl font-bold">群主女装</h1>
  <p class="mt-2 text-rose-700 dark:text-rose-200">
    这里展示了我们可爱的群主在各种活动中的装扮照片，尽情欣赏吧！
  </p>

  <!-- Filter and view controls -->
  <div
    class="mt-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0"
  >
    <div class="flex flex-wrap gap-2">
      <button
        class="rounded-full px-3 py-1 text-sm font-medium transition-colors {activeTag ===
        null
          ? 'bg-rose-600 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
        on:click={() => handleTagClick(null)}
      >
        全部
      </button>

      {#each allTags as tag}
        <button
          class="rounded-full px-3 py-1 text-sm font-medium transition-colors {activeTag ===
          tag
            ? 'bg-rose-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}"
          on:click={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      {/each}
    </div>

    <div class="flex items-center space-x-3">
      <select
        class="rounded-lg border border-rose-200 bg-white px-3 py-1.5 text-sm text-gray-700 shadow-sm focus:border-rose-400 focus:outline-none dark:border-rose-700 dark:bg-gray-800 dark:text-gray-200"
        value={activeSort}
        on:change={handleSortChange}
      >
        {#each sortOptions as option}
          <option value={option.id}>{option.name}</option>
        {/each}
      </select>

      <div class="flex rounded-lg border border-rose-200 dark:border-rose-700">
        {#each viewModes as mode}
          <button
            class="px-3 py-1.5 text-sm {activeViewMode === mode.id
              ? 'bg-rose-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}"
            class:rounded-l-lg={mode.id === "grid"}
            class:rounded-r-lg={mode.id === "list"}
            on:click={() => handleViewModeClick(mode.id)}
          >
            {mode.name}
          </button>
        {/each}
      </div>
    </div>
  </div>
</section>

<div class="mx-auto my-8 max-w-screen-lg px-4">
  {#if displayItems.length === 0}
    <div class="rounded-lg bg-gray-100 p-8 text-center dark:bg-gray-800">
      <p class="text-lg text-gray-600 dark:text-gray-400">
        没有找到符合条件的装扮照片
      </p>
    </div>
  {:else if activeViewMode === "grid"}
    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {#each displayItems as item}
        <div
          class="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          on:click={() => openModal(item)}
          on:keydown={(e) => e.key === "Enter" && openModal(item)}
          role="button"
          tabindex="0"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            class="aspect-[3/4] w-full object-cover transition-transform group-hover:scale-105"
          />
          <div
            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white"
          >
            <h3 class="text-lg font-medium">{item.title}</h3>
            <p class="mt-1 text-sm text-gray-200">{item.date}</p>
            <div class="mt-2 flex items-center">
              <span class="flex items-center gap-1">
                <span>❤️</span>
                <span>{item.likes}</span>
              </span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="space-y-4">
      {#each displayItems as item}
        <div
          class="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800 sm:flex-row"
          on:click={() => openModal(item)}
          on:keydown={(e) => e.key === "Enter" && openModal(item)}
          role="button"
          tabindex="0"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            class="h-60 w-full object-cover sm:h-auto sm:w-1/3"
          />
          <div class="flex flex-1 flex-col justify-between p-5">
            <div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">
                {item.title}
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                {#each item.tags as tag}
                  <span
                    class="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800 dark:bg-rose-900 dark:text-rose-200"
                  >
                    {tag}
                  </span>
                {/each}
              </div>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400"
                >{item.date}</span
              >
              <span
                class="flex items-center gap-1 text-rose-600 dark:text-rose-400"
              >
                <span>❤️</span>
                <span>{item.likes}</span>
              </span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <!-- Submission note -->
  <div
    class="mt-12 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 p-6 text-white shadow-md dark:from-rose-600 dark:to-pink-700"
  >
    <h2 class="text-xl font-bold">照片收集中</h2>
    <p class="mt-2">
      我们正在收集更多群主的装扮照片！如果你有群主的装扮照片，欢迎提交给我们。
    </p>
  </div>
</div>

{#if selectedItem}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    on:click={closeModal}
    on:keydown={(e) => e.key === "Escape" && closeModal()}
    role="button"
    tabindex="0"
  >
    <div
      class="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-lg bg-white dark:bg-gray-800"
      on:click={(e) => e.stopPropagation()}
    >
      <button
        class="absolute right-2 top-2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        on:click={closeModal}
      >
        ✕
      </button>

      <img
        src={selectedItem.imageUrl}
        alt={selectedItem.title}
        class="max-h-[70vh] w-auto"
      />

      <div class="p-5">
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">
          {selectedItem.title}
        </h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          {selectedItem.description}
        </p>

        <div class="mt-4 flex items-center justify-between">
          <div class="flex flex-wrap gap-2">
            {#each selectedItem.tags as tag}
              <span
                class="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800 dark:bg-rose-900 dark:text-rose-200"
              >
                {tag}
              </span>
            {/each}
          </div>

          <div class="flex items-center gap-3">
            <span class="text-sm text-gray-500 dark:text-gray-400"
              >{selectedItem.date}</span
            >
            <button
              class="flex items-center gap-1 text-rose-600 dark:text-rose-400"
            >
              <span>❤️</span>
              <span>{selectedItem.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<Comment />
