import HomeNavbar from '@/components/dashboard/HomeNavbar'
import SalesOverview from '@/components/dashboard/SalesOverview'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className=''>
        <HomeNavbar/>
        {children}
    </div>
  )
}
