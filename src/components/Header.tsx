import { For } from 'solid-js'
import { Link } from '@solidjs/router'
import Logo from '../assets/logo.jpg'
import siteTitleMap from '../assets/title_map.json'

type HeaderLinkProps = {
  href: string
  title: string
}

const HeaderLogo = () => (
  <a class="my-3 ml-3 mr-4">
    <Link href="/">
      <img
        class="h-6 rounded-full"
        src={Logo}
        alt="TE Logo"
        loading="lazy"
      />
    </Link>
  </a>
)

const HeaderLink = (props: HeaderLinkProps) => (
  <li class="mb-0 pr-2" data-te-nav-item-ref>
    <a
      class="px-2 text-neutral-500 hover:text-neutral-700"
      data-te-nav-link-ref>
      <Link class="no-underline hover:underline" href={props.href}>
        {props.title}
      </Link>
    </a>
  </li>
)

export default () => (
  <nav class="relative w-full px-3 py-2 shadow-md">
    <div
      class="flex items-center"
      data-te-collapse-item>
      <HeaderLogo />
      <ul
        class="mr-auto flex flex-row"
        data-te-navbar-nav-ref>
        <For each={siteTitleMap.slice(1, -1)}>
          {(item) => <HeaderLink href={item.href} title={item.title} />}
        </For>
      </ul>
    </div>
  </nav>
)
