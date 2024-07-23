
import Link from 'next/link';
import React from 'react'

export default function OptionCard({ optionData }) {
    const { title, description, link, linkTitle, enabled, icon:Icon } = optionData;
    return (
        <div className="shadow-xl bg-white flex flex-col items-center justify-center gap-4 p-6">
            <h2>{title}</h2>
            <div>
                <Icon strokeWidth="1px" className='w-32 h-32' />
            </div>
            <p className='line-clamp-1'>
                {description}
            </p>

            {enabled ? (
                <Link href={link} className="py-2 px-3 text-white rounded-sm bg-blue-700 inline-flex items-center space-x-2">
                    {linkTitle}
                </Link>
            ) : (<button className="py-2 px-3 text-white rounded-sm bg-blue-700 inline-flex items-center space-x-2">
                Enable
            </button>)}

        </div>
    )
}
