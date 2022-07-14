import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { MobileNaveItem } from 'components/atoms'
import { clickVibrate } from 'helpers/utils'
import routs from 'helpers/routs'

import {
  IconNews,
  IconUser,
  IconSearch,
  IconLibrary,
  IconHome
} from 'components/icons'

type Props = {}

const MobileNav: React.FC<Props> = () => {
  const router = useRouter()
  const { data: session } = useSession()

  React.useEffect(() => {
    router.prefetch(routs.search)
  }, [router])

  const _clickOnSearch = () => {
    clickVibrate()
    if (router.pathname === routs.search) {
      const searchBox = document.getElementById('mainSearch')
      searchBox && searchBox.focus()
    } else {
      router.push(routs.search)
    }
  }

  const __routeOnClick = (path: string) => {
    clickVibrate()
    router.push(path)
  }

  return (
    <>
      <section className="mobile-nav bg_white fixed bottom-0 w-full flex md:hidden">
        <MobileNaveItem
          onClick={() => __routeOnClick(routs.index)}
          text="Home"
          icon={<IconHome />}
          isActive={router.pathname === routs.index}
        />
        <MobileNaveItem
          onClick={() => __routeOnClick(session ? routs.profile : routs.login)}
          text={session ? 'Profile' : 'Login'}
          icon={<IconUser />}
          isActive={router.pathname === routs.profile}
        />
        <MobileNaveItem
          text="Search"
          onClick={_clickOnSearch}
          icon={
            <span>
              <IconSearch className="text-white" />
            </span>
          }
          primary
          isActive={router.pathname === routs.search}
        />
        <MobileNaveItem
          onClick={() => __routeOnClick('/library/collections')}
          text="Library"
          icon={<IconLibrary />}
          isActive={router.pathname === '/library/collections'}
        />
        <MobileNaveItem
          onClick={() => __routeOnClick('/library/searches')}
          text="News"
          icon={<IconNews />}
          isActive={router.pathname === '/library/searches'}
        />
      </section>
    </>
  )
}

export default MobileNav
