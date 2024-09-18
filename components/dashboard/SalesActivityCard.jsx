import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SalesActivityCard({item}) {
    return (
        <Link href={item.href} className="rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-3 py-4 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300">
            <h4 className={`font-semibold text-3xl ${item.color}`}>{item.number}</h4>
            {/* <small className='text-slate-500'>{item.unit}</small> */}
            <div className="flex items-center space-x-2 ">
                <CheckCircle2 className='w-3 h-3' />
                <span className='text-slate-500 uppercase text-sm'>{item.title}</span>
            </div>
        </Link>
    )
}
