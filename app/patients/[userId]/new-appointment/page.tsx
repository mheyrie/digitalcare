
import AppointmentForm from "@/components/forms/AppointmentForm"
import { ModeToggle } from "@/components/ModeToggle"
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image"


const NewAppointment = async ({params:{userId}}: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
   <div className="flex h-screen max-h-screen">

      <ModeToggle />
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
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
          <AppointmentForm 
          type="create" userId = {userId}
          />

           <p className="justify-items-end text-dark-600 xl:text-left">
              © {new Date().getFullYear()} We Care. All rights reserved.
            </p>
           
          </div>
        
      </section>
      <Image
        width={1000}
        height={1000}
        src="/assets/images/appointment-img.png"
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
        loading="eager"
        fetchPriority="high"
        priority
      />
    </div>
  )
}
export default NewAppointment