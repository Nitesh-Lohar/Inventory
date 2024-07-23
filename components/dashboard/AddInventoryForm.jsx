"use client"
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import { makePostRequest } from '@/lib/apiRequest'
import { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function AddInventoryForm() {
  const branches = [
    {
      label: "Branch A",
      value: "maidfsdfdn"
    },
    {
      label: "Branch B",
      value: "dvxvc"
    }
  ]

  const items = [
    {
      label: "item A",
      value: "f"
    },
    {
      label: "item B",
      value: "ff"
    }
  ]
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false)
  async function onSubmit(data) {
    console.log(data)

    makePostRequest(setLoading,"/api/adjustments/add",data,"Stock Adjustment",reset)

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

      <TextInput
        label="Reference Number"
        name="referenceNumber"
        type='number'
        register={register}
        errors={errors}
        className='w-full'
/>
<SelectInput name="itemId"
        label="Select the Item"
        register={register}
        className='w-full'
        options={items} />

<TextInput
        label="Enter Amount of stock to Add"
        name="addStockQty"
        type='number'
        register={register}
        errors={errors}
        className='w-full' />


      <SelectInput name="receivingWarehouseId"
        label="Select the Warehouse that will receive the stock"
        register={register}
        className='w-full'
        options={branches} />

      {/* description */}
      <TextareaInput
        label={"Adjustment Notes"}
        name="notes"
        register={register}
        errors={errors} />


    </div>
    <SubmitButton isLoading={loading} title="Category" />

  </form>
  )
}
