import { Check, CheckCircle2, LocateFixed } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import SalesActivityCard from './SalesActivityCard';
import InventorySummaryCard from './InventorySummaryCard';
import FixedHeader from './FixedHeader';
import { getData } from '@/lib/getData';

export default async function SalesOverview() {
    const categoriesData = getData("categories");
    const itemsData = getData("items");
    const warehousesData = getData("warehouse");
    const suppliersData = getData("suppliers");

    const [categories,items,warehouses,suppliers]=await
    Promise.all([
        categoriesData,
        itemsData,
        warehousesData,
        suppliersData
    ])

    const inventorySummary = warehouses.map((item, i) =>{
        return {
            title: item.title,
            number: item.stockQty,
        };
    })

    const salesActivity = [
        {
            title: "categories",
            number: categories.length,
            unit: "Qty",
            href: "/dashboard/inventory/categories",
            color: "text-red-600"
        },
        {
            title: "Items",
            number: items.length,
            unit: "Pkgs",
            href: "/dashboard/inventory/items",
            color: "text-blue-600"
        },
        {
            title: "warehouses",
            number: warehouses.length,
            unit: "Pkgs",
            href: "/dashboard/inventory/warehouse",
            color: "text-green-600"
        },
        {
            title: "Suppliers",
            number: suppliers.length,
            unit: "Qty",
            href: "/dashboard/inventory/suppliers",
            color: "text-yellow-600"
        },
        
    ];


    return (
        <div className='bg-blue-50 border-b border-slate-300 p-8 grid grid-cols-12 gap-4'>
            {/* Sales Activity */}
            <div className=" col-span-8 border-r border-slate-300 p-8">
                <h2 className='mb-6 text-xl'>Sales Activity</h2>
                <div className="pr-8   grid grid-cols-4 gap-4">
                    {/* Cards */}
                    {
                        salesActivity.map((item, i) => {
                            return (
                                <SalesActivityCard item={item} key={i}/>
                                
                            )
                        })
                    }

                </div>
            </div>
            {/* Inventory Summary */}
            <div className="col-span-4 p-8">
                <h2 className='mb-6 text-xl'>Inventory Summary</h2>
                <div className=''>
                    {
                        inventorySummary.map((item,i)=>{
                            return(
                                <InventorySummaryCard item={item} key={i}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
