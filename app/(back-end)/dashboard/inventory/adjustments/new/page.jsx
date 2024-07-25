import AdjustmentForm from '@/components/dashboard/AdjustmentForm'
import { getData } from '@/lib/getData'
import Warehouse from '../../warehouse/page'

export default async function NewAdjustments() {
const itemsData = getData("items")
const warehousesData = getData("warehouse")
const suppliersData = getData("suppliers")

const [items, warehouse, suppliers]=await Promise.all([itemsData, warehousesData, suppliersData])
console.log(warehouse)
  return (
    <AdjustmentForm items={items} suppliers={suppliers} warehouse={warehouse} /> 
    
  )
}
