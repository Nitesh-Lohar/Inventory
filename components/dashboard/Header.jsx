"use client"
import React from 'react'
import { AlignJustify, Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users2 } from 'lucide-react'
import SearchInput from './SearchInput'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { generateInitials } from '@/lib/generateInitials'
import Login from '@/app/login/page'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Header({ setShowSidebar }) {

  const { data: session, status } = useSession()
  const router = useRouter();
  if (status === 'loading') {
    return <p>Loading user</p>
  }

  if (status === 'unauthenticated') {
    // router.push("/login")
    return <Login />;
  }

  const username = session?.user?.name.split(' ')[0] ?? "";
  const initials = generateInitials(session?.user?.name)
  return (
    <div className='bg-gray-300 h-14 flex items-center justify-between px-8 border-b border-slate-300 shadow-md'>
      <button className='lg:hidden' onClick={() => setShowSidebar(true)}>
        <AlignJustify className='w-6 h-6' />
      </button>
      <div className='flex gap-3'>
        {/* Recent Activities */}
        <button className='hidden lg:block'>
          <History className='w-6 h-6' />
        </button>

        {/* Search */}
        <SearchInput />
      </div>
      <div className='items-center gap-3 hidden lg:flex'>
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
          <DropdownMenu>
            <DropdownMenuTrigger>
            <button className='flex items-center'>
            <span>{username}</span>
            <ChevronDown className='w-4 h-4' />
          </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button onClick={()=>signOut()}>Logout</button>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          
          <button>
            {session.user?.image ? (
              <Image src={session.user?.image} alt='User Image' width={96} height={96} className='w-8 h-8 rounded-full border-slate-900' />

            ) : (
              <div className="w-8 h-8 rounded-full border-slate-900 bg-white"> {initials}</div>
            )}
          </button>

          <button>
            <LayoutGrid className='w-6 h-6 text-slate-900' />
          </button>
        </div>
        {/*  */}
      </div>
      <button className='lg:hidden'>
        <Image src="/users.jpg" alt='User Image' width={96} height={96} className='w-8 h-8 rounded-full border-slate-900' />
      </button>
    </div>
  )
}
