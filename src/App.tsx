import { useRoutes } from '@solidjs/router'
import { routes } from './routes'
import Header from './components/Header'
import TitleMeta from './components/TitleMeta'

const App = () => {
  const Route = useRoutes(routes)

  return (
    <>
      <Header />
      <TitleMeta />
      <Route />
    </>
  )
}

export default App
