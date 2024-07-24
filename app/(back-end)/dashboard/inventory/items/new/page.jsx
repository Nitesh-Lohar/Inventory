import CreateItemForm from '@/components/dashboard/CreateItemForm'
import FormHeader from '@/components/dashboard/FormHeader'
import { getData } from '@/lib/getData'

export default async function NewItem({initialData={}, isUpdate=false}) {
  const categoriesData =  getData('categories');
  const brandsData =  getData('brands');
  const warehousesData =  getData('warehouse');
  const suppliersData =  getData('suppliers');
  const unitData =  getData('units');


  const [categories,brands,warehouses,suppliers, unit] = await Promise.all([categoriesData, brandsData,warehousesData,suppliersData,unitData])


  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate?"Update Item":"New Item"} href="/dashboard/inventory/items" />

      <CreateItemForm 
      categories={categories}
      unit={unit}
      brands={brands}
      suppliers={suppliers}
      warehouses={warehouses}
      initialData={initialData}
      isUpdate={true}
      />

    </div>
  )
}
