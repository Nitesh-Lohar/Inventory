import React from 'react'
import { AlignJustify, Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users2 } from 'lucide-react'
import SearchInput from './SearchInput'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='bg-gray-300 h-14 flex items-center justify-between px-8 border-b border-slate-300 shadow-md'>
      <button className='sm:hidden'>
        <AlignJustify className='w-6 h-6' />
      </button>
      <div className='flex gap-3'>
        {/* Recent Activities */}
        <button className='hidden sm:block'>
          <History className='w-6 h-6' />
        </button>

        {/* Search */}
        <SearchInput />
      </div>
      <div className='items-center gap-3 hidden sm:flex'>
        {/* plus icon */}
        <div className='pr-2 border-r border-gray-500'>
          <button className="p-1 rounded-lg bg-blue-700">
            <Plus className='text-slate-50 w-4 h-4' />
          </button>
        </div>

        <div className='flex border-r border-gray-500 space-x-2'>
          <button className="p-1 rounded-lg hover:bg-slate-100">
            <Users2 className='text-black w-4 h-4' />
          </button>

          <button className="p-1 rounded-lg hover:bg-slate-100">
            <Bell className='text-black w-4 h-4' />
          </button>

          <button className="p-1 rounded-lg hover:bg-slate-100">
            <Settings className='text-black w-4 h-4' />
          </button>

        </div>
        {/*  */}
        <div className='flex gap-3'>
          <button className='flex items-center'>
            <span>Nitesh</span>
            <ChevronDown className='w-4 h-4' />
          </button>
          <button>
            <Image src="/users.jpg" alt='User Image' width={96} height={96} className='w-8 h-8 rounded-full border-slate-900' />
          </button>

          <button>
            <LayoutGrid className='w-6 h-6 text-slate-900' />
          </button>
        </div>
        {/*  */}
      </div>
      <button className='sm:hidden'> 
        <Image src="/users.jpg" alt='User Image' width={96} height={96} className='w-8 h-8 rounded-full border-slate-900' />
      </button>
    </div>
  )
}
