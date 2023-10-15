import { onMount } from 'solid-js'
import { Datepicker, Input, initTE } from 'tw-elements'
import { useRoutes } from '@solidjs/router'
import { routes } from './routes'
import Header from './components/Header'
import TitleMeta from './components/TitleMeta'

const App = () => {
  const Route = useRoutes(routes)
  onMount(() => initTE({ Datepicker, Input }))

  return (
    <>
      <Header />
      <TitleMeta />
      <Route />
    </>
  )
}

export default App
