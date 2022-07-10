import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import cn from "classnames";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

function Header() {
  const scrollPosition = useScrollPosition();
  const isInScroll = scrollPosition > 50;

  return (
    <header
      className={cn(
        "fixed w-screen top-0 z-50 grid grid-cols-[auto_minmax(70px,1fr)_auto] md:grid-cols-3 p-5 md:px-10 transition duration-150 ease-out",
        {
          "bg-white shadow-md": isInScroll,
          "bg-transparent": !isInScroll,
        }
      )}
    >
      <div className="relative flex items-center w-16 mr-4 md:w-32 h-6 md:h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="airbnb"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div
        className={cn(
          "flex items-center bg-white bg-opacity-30 rounded-full py-2 md:shadow-sm",
          {
            "md:border-2": isInScroll,
            "md:border-2 md:border-transparent": !isInScroll,
          }
        )}
      >
        <input
          className={cn("flex-grow pl-5 bg-transparent outline-none ", {
            "placeholder-gray-400 text-gray-600": isInScroll,
            "placeholder-gray-200 text-white": !isInScroll,
          })}
          type="text"
          placeholder="Start your search"
          name="search"
          id="search"
        />
        <SearchIcon className="h-8 shrink-0 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>
      <div
        className={cn("flex space-x-4 justify-end items-center ", {
          "text-gray-500": isInScroll,
          "text-gray-200": !isInScroll,
        })}
      >
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 shrink-0 hidden md:inline cursor-pointer" />

        <div className="flex items-center text-gray-500 bg-white space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6 shrink-0" />
          <UserCircleIcon className="h-6 hidden md:inline" />
        </div>
      </div>
    </header>
  );
}

export default Header;
