import { Home, ListVideo, Search } from 'lucide-react'
import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface SidebarItem {
  to: string
  icon: JSX.Element
  label: string
}

const sidebarItems: SidebarItem[] = [
  { to: '/', icon: <Home />, label: 'Home' },
  { to: '/search', icon: <Search />, label: 'Search' },
  { to: '/playlist', icon: <ListVideo />, label: 'Playlist' },
]

const Sidebar: FC = () => {
  const location = useLocation()

  return (
    <div className='hidden h-screen w-full bg-background px-2 py-4 md:block md:w-20 lg:w-64 lg:border-r lg:px-6 '>
      <div className='fixed space-y-6 lg:w-52'>
        {sidebarItems.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex w-full cursor-pointer flex-col items-center gap-x-4 space-y-2 p-1 py-2 transition-all hover:bg-accent lg:flex-row lg:space-y-0 lg:p-2 `}
          >
            {React.cloneElement(icon, {
              strokeWidth: location?.pathname === to ? 2 : 2,
              className: location?.pathname === to ? 'text-primary' : '',
              // fill: 'bg-primary',
            })}
            <h1 className={`text-sm font-normal transition-all ${location?.pathname === to ? 'text-primary' : ''}`}>{label}</h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
