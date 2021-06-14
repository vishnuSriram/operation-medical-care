import Image from "next/image";
import Link from "next/link";

import { PhoneIcon, MailIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const HeaderTopbar = () => {
  return (
    <div className="hidden w-full border-b border-gray-200 md:block">
      <div className="flex flex-row items-center justify-between max-w-6xl m-auto px-7">
        <ul className="flex flex-row h-full">
          <li className="flex flex-row items-center mr-3">
            {/* TODO Make this link a phone number */}
            <a
              href="tel:850-974-7400"
              className="text-gray-500 transition-colors hover:text-blue-600"
            >
              <PhoneIcon className="inline w-4 h-4" />
              <span>(850) 974-7400</span>
            </a>
          </li>
          <span className="block w-[1px] bg-gray-200 h-auto"></span>
          <li className="flex flex-row items-center ml-3">
            {/* TODO Make this link an email */}
            <a
              href="mailto:operationmedicalcare@gmail.com"
              className="text-gray-500 transition-colors hover:text-blue-600"
            >
              <MailIcon className="inline w-4 h-4 mr-1" />
              <span>operationmedicalcare@gmail.com</span>
            </a>
          </li>
        </ul>
        <div className="px-3 py-2 pr-0">
          <Link href="https://charity.gofundme.com/o/en/donate-widget/31604">
            <a className="btn-main">Donate!</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full bg-white"
      style={{ boxShadow: "0px 5px 14.25px 0.75px rgba(12, 105, 184, 0.1)" }}
    >
      <HeaderTopbar />
      <nav className="flex flex-row items-center justify-center w-full max-w-6xl py-5 md:justify-between px-7">
        <h1 className="text-2xl font-bold tracking-tighter text-blue-500">
          <Link href="/">
            <span className="flex items-center justify-center">
              <Image src="/images/home/plus.png" width={24} height={24} />{" "}
              <span className="ml-2">Operation Medical Care</span>
            </span>
          </Link>
        </h1>
        <ul className="flex-row hidden space-x-5 md:flex">
          {navigation.map((item) => (
            <li
              key={item.name}
              className="text-gray-600 transition-colors hover:text-primary-500"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
