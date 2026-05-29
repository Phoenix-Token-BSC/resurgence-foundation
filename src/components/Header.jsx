"use client";

import Link from "next/link";
import Image from "next/image";
import {useState, useEffect} from "react"
import { useRouter } from "next/navigation";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const router = useRouter();

  return (
    <div>
      <header className="">
        <nav className="bg-white text-neutral-900 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between p-4 items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/images/rf-logo.png" width={30} height={30} className="w-8 h-8" alt="rf-logo" />
                <h1 className="font-bold text-lg flex flex-col">
                  <span className="">RESURGENCE</span>
                  <span className="-mt-2">FOUNDATION</span>
                  
                </h1>
              </Link>
              <div className="hidden md:flex space-x-8 md:items-center">
                <Link href="/">Home</Link>
                <Link href="/">About us</Link>
                <Link href="/involve">Get involved</Link>
                <Link href="/">Projects</Link>
                <Link href="/" className="bg-neutral-900 font-bold text-white p-2 rounded-lg">Donate</Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 hover:text-neutral-700 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                <Link href="/" className="block text-neutral-900 hover:bg-gray-200 rounded-md px-3 py-2">
                  Home
                </Link>
                <Link href="/" className="block text-neutral-900 hover:bg-gray-200 rounded-md px-3 py-2">
                  About us

                </Link>
                <Link href="/involve" className="block text-neutral-900 hover:bg-gray-200 rounded-md px-3 py-2">
                  Get involved
                </Link>
                <Link href="/" className="block text-neutral-900 hover:bg-gray-200 rounded-md px-3 py-2">
                  Projects
                </Link>
                <Link href="/" className="block text-neutral-900 font-bold hover:bg-gray-200 rounded-md px-3 py-2">
                  Donate
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}