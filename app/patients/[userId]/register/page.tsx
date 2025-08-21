import RegisterForm from "@/components/forms/RegisterForm";
import { ModeToggle } from "@/components/ModeToggle";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";


const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <ModeToggle />
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
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
          <RegisterForm user={user} />

          <p className="copyright py-12">
            © {new Date().getFullYear()} We Care. All rights reserved.
          </p>
  
        </div>
      </section>
      <Image
        width={1000}
        height={1000}
        src="/assets/images/register-img.png"
        alt="patient onboarding"
        className="side-img max-w-[490px]"
        // loading="eager"
        // fetchPriority="high"
        // priority
      />
    </div>
  );
};
export default Register;
