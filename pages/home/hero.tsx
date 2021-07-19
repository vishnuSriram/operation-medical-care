import Link from "next/link";
import Image from "next/image";

import ImageChildren from "../../public/images/home/hero/Operation-Medical-Care-Belize-1.jpg";

export default function Hero() {
  return (
    <main className="relative grid w-full grid-cols-1 pt-12 pb-20 mx-auto text-center lg:grid-cols-2 max-w-7xl lg:py-16 lg:text-left isolate mt-14 md:mt-0">
      <div className="z-10 px-2 lg:px-16 sm:px-8">
        <h1 className="mt-8 text-4xl font-medium tracking-tight text-white lg:mb-6 lg:mt-0 lg:font-normal lg:text-black sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          Providing Care
          <br />
          Changing Lives
        </h1>
        <p className="w-full max-w-md px-2 mx-auto my-12 text-base font-light leading-7 text-gray-100 lg:my-0 lg:px-0 lg:font-normal lg:text-gray-500 sm:text-xl md:mt-5 md:max-w-xl lg:max-w-3xl">
          We are a non-profit made up of medical doctors, nurses, pharmacists,
          dietitians, business owners, software engineers and everyday people
          all committed to bringing healthcare to the remote villages of Belize.
        </p>
        <Link href="https://charity.gofundme.com/o/en/donate-widget/31604">
          <a className="inline-block px-10 py-4 font-medium transition-all bg-white rounded shadow lg:mt-8 text-primary-600 hover:text-white hover:bg-primary-500 hover:shadow-lg hover:cursor-pointer">
            Donate!
          </a>
        </Link>
      </div>
      <div className="absolute inset-0 z-0 grid w-full h-full lg:relative place-self-center lg:w-4/5 lg:min-h-[23rem]">
        <Image
          className="object-cover w-full h-full"
          src={ImageChildren}
          width={512}
          height={368}
          placeholder="blur"
          alt="3 Belizean children having fun"
        />
      </div>
      <div className="absolute inset-0 bg-gray-800 bg-opacity-80 lg:hidden"></div>
    </main>
  );
}
