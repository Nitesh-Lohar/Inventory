"use client"
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import FormHeader from '@/components/dashboard/FormHeader'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Value } from 'sass'

export default function NewWarehouse({initialData = {}, isUpdate = false}) {
  const selectOptions =[
    {
      title:"Main",
      id:"main" 
    },
    {
      title:"Branch",
      id:"branch"
    }
  ]

  const router=useRouter()
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialData
  });
  const [loading, setLoading] = useState(false)
  function redirect() {
    router.push("/dashboard/inventory/warehouse")
  }
  async function onSubmit(data) {
    console.log(data)
    if(isUpdate){
      makePutRequest(setLoading, `api/warehouse/${initialData.id}`, data, "warehouse", redirect, reset)
    }else{

      makePostRequest(setLoading,"/api/warehouse",data,"Warehouse",reset)
    }


  }

  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate?"Update Warehouse":"New Warehouse"} href="/dashboard/inventory/warehouse" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          
          <SelectInput name="type"
          label="Select the Warehouse type"
          register={register} className='w-full'
          options={selectOptions}/>

          <TextInput
            label={"Warehouse Title"}
            name="title"
            register={register}
            errors={errors}
            className='w-full' />

          <TextInput
            label={"Warehouse Location"}
            name="location"
            register={register}
            errors={errors} />

          {/* description */}
          <TextareaInput
            label={"Category Description"}
            name="description"
            register={register}
            errors={errors} />


        </div>
        <SubmitButton isLoading={loading} title={isUpdate?"Update Warehouse":"New Warehouse"} />

      </form>
    </div>
  )
}
