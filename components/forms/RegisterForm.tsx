"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { FormFieldType } from "./PatientForm";
import { GenderOptions } from "@/constants";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const RegisterForm = ({ user }: { user: User }) => {
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
      setIsLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex-1"
      >
        <section className="space-y-4">
          <h1 className="header">Welcome, Happy to have you here🎉🎉🎉🎉🎉 </h1>
          <p className="text-dark-300 dark:text-dark-700">
            Let us know a bit about you to get started
          </p>
        </section>

        <section className="space-y-4">
          <div className="mb-9 space-y-1"></div>
          <h2 className="text-dark-300 dark:text-dark-700 sub-header">
            Personal Information
          </h2>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full Name:"
          placeholder="Enter your full name"
          control={form.control}
          iconSrc="/assets/icons/user.svg"
          iconAlt="User Icon"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
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
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            name="birthdate"
            label="Date of Birth:"
            placeholder="Select your birthdate"
            control={form.control}
          />

          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            name="gender"
            label="Gender:"
            placeholder="(555) 123-4355"
            control={form.control}
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
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
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            name="birthDate"
            label="Date of Birth:"
            control={form.control}
          />

          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="gender"
            label="Gender:"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {GenderOptions.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem
                        value={option} id={option}
                        className=""/>
                        <Label htmlFor={option} className="cursor-pointer">
                        {option}
                        </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>

          <section className="space-y-4">
          <div className="mb-9 space-y-1"></div>
          <h2 className="text-dark-300 dark:text-dark-700 sub-header">
            Medical Information
          </h2>
        </section>
        <div className="flex flex-col gap-6 xl:flex-row">

          
        </div>
        <div className="flex flex-col gap-6 xl:flex-row"></div>
        <div className="flex flex-col gap-6 xl:flex-row"></div>

        <SubmitButton isLoading={isLoading}> Get 💃Started</SubmitButton>
      </form>
    </Form>
  );
};
export default RegisterForm;
