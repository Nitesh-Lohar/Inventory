import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FixedHeader({newLink}) {
  return (
    <div className='flex justify-between items-center py-5 px-4' >
      <button className='text-2xl'>All Items</button>
      <div className="flex gap-4">
        {/* New */}
        <Link href={newLink} className="p-1 px-3 text-white rounded-sm bg-blue-700 flex items-center space-x-2">
            <Plus className=' w-4 h-4' />
            <span>New</span>
          </Link>

        {/* Layout */}
        <div className="flex rounded-md overflow-hidden">
          <button className='bg-gray-300 p-2 border-r border-gray-400'>
            <List className='w-4 h-4'/>
          </button>

          <button className='bg-gray-100 p-2'>
            <LayoutGrid className='w-4 h-4' />
          </button>
        </div>
        {/* More */}
        <button className='bg-gray-100 p-2'>
          <MoreHorizontal className='w-4 h-4' />
        </button>
        {/* Help */}
        <button className='bg-orange-100 p-2'>
            <HelpCircle className='w-4 h-4' />
          </button>
      </div>
    </div>
  )
}
