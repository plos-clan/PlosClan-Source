import { createSignal } from 'solid-js'

export default function Home() {
  const [count, setCount] = createSignal(0)

  return (
    <section class="bg-gray-100 p-8 text-gray-700">
      <h1 class="text-2xl font-bold">Home</h1>
      <p class="mt-4">这不是首页，这是一个计数器</p>

      <div class="mt-4 flex items-center space-x-2">
        <button
          class="rounded-lg border border-gray-900 px-2"
          onClick={() => setCount(count() - 1)}
        >
          -
        </button>

        <output class="p-2">Count: {count()}</output>

        <button
          class="rounded-lg border border-gray-900 px-2"
          onClick={() => setCount(count() + 1)}
        >
          +
        </button>
      </div>
    </section>
  )
}
