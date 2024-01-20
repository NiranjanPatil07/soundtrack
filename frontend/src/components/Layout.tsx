import { FC } from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router'

const Layout: FC = () => {
  return (
    <div className='grid grid-cols-[280px_minmax(900px,_1fr)]'>
      <Sidebar />
      <div className='px-6 py-8'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout