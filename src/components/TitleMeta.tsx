import { useLocation } from '@solidjs/router'
import { Title, Meta } from '@solidjs/meta'
import siteTitleMap from '../assets/title_map.json'

const websiteName = 'OS 群网站'

const titleObject = Object.fromEntries(
  siteTitleMap.map(({ href, title }) => [href, title])
)

export default () => {
  const location = useLocation()
  const pageTitle = titleObject[location.pathname]

  return (
    <>
      <Title>{`${pageTitle} | ${websiteName}`}</Title>
      <Meta property="og:title" content={`${pageTitle}`} />
    </>
  )
}
