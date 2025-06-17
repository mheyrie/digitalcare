import RegisterForm from "@/components/forms/RegisterForm";
import { ModeToggle } from "@/components/ModeToggle";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

const Register = async ({params: {userId}}: SearchParamProps) => {
  const user = await getUser(userId)
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
          <RegisterForm user = {user}/>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © {new Date().getFullYear()} We Care. All rights reserved.
            </p>
            <Link
              href="/?admin=true"
              className="text-green-600 dark:text-green-300"
            >
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        width={1000}
        height={1000}
        src="/assets/images/register-img.png"
        alt="patient onboarding"
        className="side-img max-w-[390px]"
        // loading="eager"
        // fetchPriority="high"
        // priority
      />
    </div>
  );
};
export default Register;
