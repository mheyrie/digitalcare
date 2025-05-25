/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
import React from "react";

interface CustomProps {
  control: Control<any>;
  fieldType:FormFieldType
    name: string;
    label?: string ;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disable?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field:any)=> React.ReactNode;

}

const RenderField = ({field, props}: {field:any, props:CustomProps})=>{
    return (
        <Input
        type='text'
       placeholder="Hannah Montana"
        />
    );
}
const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label, placeholder, iconSrc, iconAlt, disable, dateFormat, showTimeSelect } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">{fieldType !== FormFieldType.CHECKBOX && label &&(
            <FormLabel>{label}</FormLabel>
        )}
<RenderField field={field} props={props}/>
          
        </FormItem>
      )}
    />
  );
};
export default CustomFormField;
