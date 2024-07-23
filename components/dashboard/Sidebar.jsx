"use client"
import { BaggageClaim, ChevronLeft, Files, Home, ShoppingBag, ShoppingCart, WalletCards } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import SidebarDropdownLink from './SidebarDropdownLink';


export default function Sidebar() {
    const inventoryLinks = [
        {
            title:"Create New",
            href:"/dashboard/inventory"
        },
        {
            title: "Items",
            href: "/dashboard/inventory/items"
        },
        {
            title: "Categories",
            href: "/dashboard/inventory/categories"
        },
        {
            title: "Brands",
            href: "/dashboard/inventory/brands"
        },
        {
            title: "Units",
            href: "/dashboard/inventory/units"
        },
        {
            title: "Warehouse",
            href: "/dashboard/inventory/warehouse"
        },
        {
            title: "Inventory Adjustments",
            href: "/dashboard/inventory/adjustments"
            
        },
        {
            title: "Supplier",
            href: "/dashboard/inventory/suppliers"
            
        }
    ];

    // const salesLinks = [
    //     {
    //         title: "Customers",
    //         href: "#"
    //     },
    //     {
    //         title: "Sales Orders",
    //         href: "#"
    //     },
    //     {
    //         title: "Packages",
    //         href: "#"
    //     },
    //     {
    //         title: "Shipments",
    //         href: "#"
    //     },
    //     {
    //         title: "Invoices",
    //         href: "#"
    //     },
    //     {
    //         title: "Sales Recipts",
    //         href: "#"
    //     },
    //     {
    //         title: "Payment Received",
    //         href: "#"
    //     },
    // ];

    return (
        <div className=' w-56 min-h-screen bg-slate-800 text-slate-50 fixed hidden sm:block'>
            {/* Top Part */}
            <div className='flex flex-col'>
                <Link href="#" className='bg-gray-700 flex space-x-3 items-center px-3 py-2'>
                    <ShoppingCart />
                    <span className=' font-bold text-xl italic'>Invnt-Mgmt</span>
                </Link>

            </div>

            {/* Links */}
            <nav className='flex flex-col px-3 py-7'>
                <Link className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md' href="/dashboard/home">
                    <Home className='w-4 h-4' />
                    <span>Home</span>
                </Link>

                <SidebarDropdownLink
                    items={inventoryLinks}
                    title="Inventory"
                    icon={BaggageClaim} />

                {/* <SidebarDropdownLink
                    items={salesLinks}
                    title="Sales"
                    icon={ShoppingBag} /> */}

                {/* <button className='flex items-center space-x-2 p-2'>
                    <WalletCards className='w-4 h-4' />
                    <span>Purchases</span>
                </button> */}

                {/* <Link className='flex items-center space-x-2 p-2' href="#">
                    <Files className='w-4 h-4' />
                    <span>Reports</span>
                </Link> */}

            </nav>


            {/* Bottom Part */}
            <div className='flex flex-col'>
                <button className='bg-gray-700 flex space-x-10  justify-center items-center px-3 py-6 '>
                    <ChevronLeft />
                </button>
            </div>
        </div>

    )
}
