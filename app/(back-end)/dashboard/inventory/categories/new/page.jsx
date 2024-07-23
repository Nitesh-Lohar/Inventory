"use client"
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import FormHeader from '@/components/dashboard/FormHeader'
import { makePostRequest } from '@/lib/apiRequest'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export default function NewCategories() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false)
  async function onSubmit(data) {
    console.log(data)
    makePostRequest(setLoading,"/api/categories",data,"Category",reset)

  }

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Category" href="/dashboard/inventory/categories" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label={"Category Title"}
            name="title"
            register={register}
            errors={errors} />

          {/* description */}
          <TextareaInput
            label={"Category Description"}
            name="description"
            register={register}
            errors={errors} />


        </div>
        <SubmitButton isLoading={loading} title="Category" />

      </form>
    </div>
  )
}
