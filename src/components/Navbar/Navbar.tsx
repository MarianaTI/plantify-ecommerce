import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { ButtonStyled, StyledLink } from "./index.style";
import { PiShoppingCartSimple } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateToRegister = () => {
    router.push("/register");
  };

  const renderNavbarButton = () => {
    if (router.pathname === "/" || router.pathname === "/register") {
      return <ButtonStyled onClick={navigateToRegister}>Sign up</ButtonStyled>;
    } else {
      return (
        <div className="flex space-x-12">
          <PiShoppingCartSimple className="h-6 w-6 cursor-pointer" />
          <AiOutlineUser className="h-6 w-6 cursor-pointer" />
        </div>
      );
    }
  };

  return (
    // className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    <header> 
      <nav
        aria-label="Global"
        className="mx-auto flex  items-center justify-between p-3 lg:px-12"
      >
        <div className="flex flex-1 lg:px-6 ">
          <a href="#" className="text-lg font-semibold">
            Plantify
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:items-center lg:px-6">
          <StyledLink href="/home">Home</StyledLink>
          <StyledLink href="/shop">Shop</StyledLink>
          <StyledLink href="/about">About us</StyledLink>
          {renderNavbarButton()}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg font-semibold">
              Plantify
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/shop"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  About us
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
