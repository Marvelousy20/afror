"use client";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="flex justify-between items-center px-5 py-5 relative">
      <div className="flex font-bold items-center relative">
        <Image
          src="/search.svg"
          alt="search"
          width={17}
          height={17}
          className="absolute top-50 left-0"
        />
        <Input
          className="bg-transparent outline-none border-none font-bold italic focus:!outline-none focus:!border-none px-6 !placeholder-[#75757594]"
          placeholder="Search Models"
        />
      </div>

      <div className="z-20">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          color={isOpen ? "#FFCC4D" : "white"}
        />
      </div>

      {isOpen && (
        <div className="absolute top-0 bg-[#171717] min-h-screen w-full z-10 left-0 flex flex-col items-center pt-[10.5rem] pb-20 text-xl">
          <ul className="flex flex-col gap-2 italic text-[#C5c5c5] h-full">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">My List</Link>
            </li>
            <li>
              <Link href="/">Login</Link>
            </li>
            <li>
              <Link href="/">Sign Up</Link>
            </li>
            <li>
              <Link href="/">Contact us</Link>
            </li>

            <li className="flex-1"></li>

            <li>
              Powered by <span className="text-[#FFCC4D]">Afro</span>
              <span>Runs</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
