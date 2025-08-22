import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Success= async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doc) => doc.name === appointment.primaryPhysician
  );

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo.png"
            alt="Success"
            className="h-10 w-fit"
            height={1000}
            width={1000}
          />
        </Link>
        <section className="flex flex-col items-center">
          {" "}
          <Image
            src="/assets/gifs/success.gif"
            alt="Success"
            className="h-10 w-fit"
            height={300}
            width={280}
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request </span>has
            been successfully created!
          </h2>
          <p className="text-center">
            We will get back to you shortly with the details.
          </p>
        </section>
        <section className="request-details">
          <p className="">Requested appointment details:</p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image || "/assets/icons/default-doctor.png"}
              alt="Calendar"
              className="h-6 w-6"
              height={100}
              width={100}
            />
            <p className="white-space-nowrap">Dr {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              alt="Calendar"
              className="h-6 w-6"
              height={24}
              width={24}
            />
            <p className="white-space-nowrap">
              {formatDateTime(appointment.schedule).dateTime}
            </p>
          </div>
        </section>
        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>
        <p className="copyright"> ©{new Date().getFullYear()}</p>
      </div>
    </div>
  );
};
export default Success;
