import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Building2, Factory, LayoutGrid, LayoutPanelTop, LucidePencilRuler, SendToBack, Warehouse } from 'lucide-react'
import React from 'react'

export default function Inventory() {

  const optionCards =[
    {
      title:"Items",
      description:"Create Standalone items and Services that you buy and sell",
      link:"/dashboard/inventory/items/new",
      linkTitle:"New Item",
      enabled:true,
      icon: LayoutGrid,
    },
    {
      title:"Categories",
      description:"Bundle Diffrent Items together and sell them as a kits",
      link:"/dashboard/inventory/categories/new",
      linkTitle:"New Category",
      enabled:true,
      icon: LayoutPanelTop,
    },
    {
      title:"Brands",
      description:"Tweak your Item Prices for specific contacts or transactions",
      link:"/dashboard/inventory/brands/new",
      linkTitle:"New Brand",
      enabled:true ,
      icon: Building2,
    },
    {
      title:"Warehouse",
      description:"Tweak your Item Prices for specific contacts or transactions",
      link:"/dashboard/inventory/warehouse/new",
      linkTitle:"New Warehouse",
      enabled:true ,
      icon: Warehouse,
    },
    {
      title:"Units",
      description:"Tweak your Item Prices for specific contacts or transactions",
      link:"/dashboard/inventory/units/new",
      linkTitle:"New Unit",
      enabled:true ,
      icon: LucidePencilRuler,
    },

    {
      title:"Inventory Adjustment",
      description:"Tweak your Item Prices for specific contacts or transactions",
      link:"/dashboard/inventory/adjustments/new",
      linkTitle:"New Adjustments",
      enabled:true ,
      icon: SendToBack,
    },

    {
      title:"Suppliers",
      description:"Tweak your Item Prices for specific contacts or transactions",
      link:"/dashboard/inventory/suppliers/new",
      linkTitle:"New Supplier",
      enabled:true ,
      icon: Factory,
    }

  ];
  return (
    <div>
      <FixedHeader title="All Items" newLink="/dashboard/inventory/items/new"/>

      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6 ">
        {
          optionCards.map((card,i)=>{
            return(
              <OptionCard optionData={card} key={i} />
            )
          })
        }

      </div>
    </div>
  )
}
