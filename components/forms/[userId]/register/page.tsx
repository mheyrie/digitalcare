import Image from "next/image"

const Register = () => {
  return (
    <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container">
            <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
                <Image
                    src="/assets/icon/logo.svg"
                    alt="Digital care"
                    width={1000}
                    height={1000}
                    className="mb-12 h-10 w-fit"
                />
            </div>
        </section>
    </div>
  )
}
export default Register