import PatientForm from "@/components/forms/PatientForm";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <ModeToggle />
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          {/* Logo  */}
          <div className="flex mb-12">
            <Image
              src="/assets/icons/logo.png"
              alt="Patient"
              width={1000}
              height={1000}
              className="w-fit h-10"
            />
            <span className="text-sm italic mt-2 font-semibold">We Care</span>
          </div>
          {/* Form  */}
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">© {new Date().getFullYear()} We Care. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
