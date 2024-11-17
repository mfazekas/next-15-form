"use client"
import { useForm } from 'react-hook-form';

export function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: 'all'});

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="bg-gray-100 p-4 rounded-md flex flex-col">
      <input {...register('firstName')} className="m-2 p-1 rounded-sm border border-gray-700" />
      <input {...register('lastName', { required: true })} className="m-2 p-1 rounded-sm border border-gray-700" />
      {errors.lastName && <p className="mx-2 text-red-600">Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} className="m-2 p-1 rounded-sm border border-gray-700" />
      {errors.age && <p className="mx-2 text-red-600">Please enter number for age.</p>}
      <input type="submit" className="m-2 p-1 rounded-sm border bg-gray-300" />
    </form>
  );
}
