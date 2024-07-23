"use client"
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import FormHeader from '@/components/dashboard/FormHeader'
import { makePostRequest } from '@/lib/apiRequest'
import { UploadButton, UploadDropzone } from '@/lib/uploadthing'
import { Pencil, Plus, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function NewItem() {
  const [imageUrl, setImageUrl] = useState("")

  const brands = [
    {
      label: "HP",
      value: "asdfg1y2873"
    },
    {
      label: "Dell",
      value: "asdfgh4567"
    }
  ]
  const warehouses = [
    {
      label: "warehouse A",
      value: "asdfg12873"
    },
    {
      label: "warehouse B",
      value: "asdfgh4567"
    }
  ]

  const suppliers = [
    {
      label: "supplier A",
      value: "asdfg12873"
    },
    {
      label: "supplier B",
      value: "asdfgh4567"
    }
  ]

  const unit = [
    {
      label: "Kg",
      value: "asqfg12873"
    },
    {
      label: "pcs",
      value: "asafgh4567"
    }
  ]
  const categories = [
    {
      label: "Electronics",
      value: "asdfg12873"
    },
    {
      label: "Clothing",
      value: "asdfgh4567"
    }
  ]
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false)

  async function onSubmit(data) {
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(setLoading,"/api/items",data,"Item",reset)

  }

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Item" href="/dashboard/inventory/items" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className='w-full' 
            />

          <SelectInput
            name="categoryId"
            label="Select the Item Category"
            register={register} className='w-full'
            options={categories} />


          <TextInput
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className='w-full'
          />

          <TextInput
            label="Item Barcode"
            name="barcode"
            register={register}
            errors={errors}
            // isRequired="false"
            className='w-full' />

          <TextInput
            label="Item Quantity"
            name="qty"
            register={register}
            errors={errors}
            className='w-full' />

          <SelectInput
            name="unitId"
            label="Select the Unit"
            register={register} className='w-full'
            options={unit} />

          <SelectInput
            name="BrandId"
            label="Select the Brand"
            register={register} className='w-full'
            options={brands} />



          <TextInput
            label="Buying Price"
            name="buyingPrice"
            register={register}
            errors={errors}
            type="number"
            className='w-full'
          />

          <TextInput
            label="Selling Price"
            name="sellingPrice"
            register={register}
            errors={errors}
            type="number"
            className='w-full' />

          <SelectInput
            name="supplierId"
            label="Supplier"
            register={register} className='w-full'
            options={suppliers} />

          <TextInput
            label="Re-order Point"
            name="reOrderPoint"
            type="number"
            register={register}
            errors={errors}
            className='w-full' />

          <SelectInput
            name="warehouseId"
            label="Select the Item Warehouse"
            register={register} className='w-full'
            options={warehouses} />

          <TextInput
            label="Item Weight in Kgs"
            name="weight"
            type="number"
            register={register}
            errors={errors}
            className='w-full' />

          <TextInput
            label="Item Dimensions"
            name="dimensions"
            register={register}
            errors={errors}
            className='w-full' />

          <TextInput
            label="Tax Rate in %"
            name="taxRate"
            type="number"
            register={register}
            errors={errors}
            className='w-full' />

          <TextareaInput
            label="Item Description"
            name="description"
            register={register}
            errors={errors} />

          <TextareaInput
            label="Item Notes"
            name="notes"
            register={register}
            errors={errors} />


            <ImageInput label="Item Image" imageUrl={imageUrl} setImageUrl={setImageUrl}/>


      



        </div>
        <SubmitButton isLoading={loading} title="Item" />

      </form>
    </div>
  )
}
