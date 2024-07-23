import AdjustmentForm from '@/components/dashboard/AdjustmentForm'
import { getData } from '@/lib/getData'
import Warehouse from '../../warehouse/page'

export default async function NewAdjustments() {
const itemsData = getData("items")
const warehousesData = getData("warehouse")

const [items, warehouse]=await Promise.all([itemsData, warehousesData])
console.log(warehouse)
  return (
    <AdjustmentForm items={items} warehouse={warehouse}/> 
    
  )
}
