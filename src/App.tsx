import { onMount } from 'solid-js'
import { Datepicker, Input, initTE } from 'tw-elements'
import { useRoutes } from '@solidjs/router'
import { routes } from './routes'
import Header from './components/Header'

const App = () => {
  const Route = useRoutes(routes)
  onMount(() => initTE({ Datepicker, Input }))

  return (
    <>
      <Header />
      <Route />
    </>
  )
}

export default App
