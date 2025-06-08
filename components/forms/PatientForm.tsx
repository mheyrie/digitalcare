"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  SELECT = "select",
  DATE_PICKER = "datePicker",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof UserFormValidation>) {
    const { name, email, phone } = values; // TODO: continue here
    setIsLoading(true);
    try {
      const userData = { name, email, phone };

      const user = await createUser(userData);
      if (user) router.push(`/patients/${user.$id}/register`);


    } catch (error) {
      console.error("Error submitting form:", error);
    }
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

        <SubmitButton isLoading={isLoading}> Get Started</SubmitButton>
      </form>
    </Form>
  );
};
export default PatientForm;
