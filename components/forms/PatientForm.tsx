"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  SELECT = "select",
  DATE_PICKER = "datePicker",
  SKELETON = "skeleton",
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const PatientForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi There 👋👋🏼</h1>
          <p className="text-dark-300 dark:text-dark-700">
            Schedule your first appointment
          </p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full name:"
          placeholder="Enter your full name"
          control={form.control}
          iconSrc="/assets/icons/user.svg"
          iconAlt="User Icon"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email:"
          placeholder="janedoe@gmail.com"
          control={form.control}
          iconSrc="/assets/icons/email.svg"
          iconAlt="Email Icon"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          name="phone"
          label="Phone Number:"
          placeholder="(555) 123-4355"
          control={form.control}
                />

        <Button type="submit" variant="outline">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default PatientForm;
