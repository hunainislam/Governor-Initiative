import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
 
const poppins = Poppins({ subsets: ['latin'], weight: ["800"] })
const poppinsMini = Poppins({ subsets: ['latin'], weight: ["400"] })

const Hero = () => {
  return (
    <div className={`${poppins.className} relative z-0 md:mt-20 mt-16 w-full overflow-hidden bg-[url('/images/bg_house.jpg')] bg-cover bg-opacity-75`}>
      {/* Overlay */}
      <div className="absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80"></div>

      {/* Hero Content */}
      <div className=" z-50 m-auto mt-6 block w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]">
        {/* Left Content */}
        <div className=" h-fit w-full pt-5 md:w-1/2 md:py-10">
          <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl">
            Governor Sindh
          </h1>
          <h2 className={`${poppinsMini.className} whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider  text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]`}>
            Kamran Khan Tessori
          </h2>
          <h3 className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
            Certified Cloud <br />
            Applied Generative AI <br />
            Engineer (GenEng)
          </h3>
          <p className=" my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-2xl md:text-left">
            Earn up to $5,000 / month
          </p>
          <p className="my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left">
            Now admissions are open in Hyderabad
          </p>

          {/* Buttons */}
          <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
            <Link href="/apply" aria-label="Apply Now" className="w-full md:w-auto">
              <button className="w-full rounded-md bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
                Apply Now
              </button>
            </Link>
            <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
              <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl">
                <div className="w-40 font-extrabold">
                562,143
                </div>
              </div>
              <div className="text-center text-xs tracking-wider text-main sm:mb-0 sm:text-sm">
                Accepted Applications
              </div>
            </div>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className=" relative  mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end">
          <Image
            src="/images/governor.png"
            alt="Kamran Khan Tessori - Governor Sindh"
            width={1600}
            height={1212}
            loading="lazy"
            decoding="async"
            className=" md: ml-40 h-auto min-w-[900px] lg:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
