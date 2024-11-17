"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm as useFormOrig, type FieldValues } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useMemo } from "react"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

// See https://github.com/react-hook-form/react-hook-form/pull/12424
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useForm<TFieldValues extends FieldValues = FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(...args: Parameters<typeof useFormOrig<TFieldValues, TContext, TTransformedValues >>) {
  const result = useFormOrig<TFieldValues, TContext, TTransformedValues>(...args)

  const formState = result.formState
  return useMemo(() => ({ ...result, formState }), [result, formState])
}

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: 'all'
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
