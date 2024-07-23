import React from 'react'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'

export default function Layout({children}) {
  return (
    <div className='flex'>

        <Sidebar/>
        <main className='ml-56 w-full'>
          <Header/> 
          {children}

        </main>
    </div>
  )
}
