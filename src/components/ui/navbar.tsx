"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SearchComponent from "@/components/ui/search";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { contactInfo } from "@/data/data";
import Socials from "@/components/ui/social";
import MenuItems from "@/components/ui/menuitems";
import { Search } from "lucide-react";

const navBar = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [search, setSearch] = useState(false);
  return (
    <nav className="bg-homeBg bg-cover bg-center-center bg-no-repeat z-20 bg-[#099db3] h-screen sticky inset-0">
      <div className="pt-[60px] relative box-border h-full w-full z-30">
        {/* <---- Tools ----> */}
        <section className="flex items-center absolute right-[30px] top-[15px] z-20 space-x-2">
          {/* Language Selection */}
          <div>
            {/* Tooltip for Language Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setOpen(!open)}
                    className="bg-transparent hover:bg-transparent shadow-none border-2 border-white rounded-full w-[25px] h-[35px] hover:text-lg "
                  >
                    {open ? "✕" : language.toUpperCase()}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Change Language</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* Dropdown menu items */}
            <div className="absolute top-[25px] right-12 z-20">
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger></DropdownMenuTrigger>
                <DropdownMenuContent className="">
                  <DropdownMenuLabel>Language</DropdownMenuLabel>
                  <DropdownMenuItem onSelect={() => setLanguage("en")}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setLanguage("sw")}>
                    Swahili
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Search Icon */}
          <div>
            <Button
              onClick={() => setSearch(!search)}
              className="bg-transparent hover:bg-transparent shadow-none w-[25px] h-[35px] border-2 border-[#ffff] hover:border-3 rounded-full font-bold hover:text-xl flex items-center "
            >
              {search ? (
                "✕"
              ) : (
                <Search className=" cursor-pointer hover:text-xl font-bold" />
              )}
            </Button>
          </div>
        </section>

        <div className="absolute right-[30px] top-[60px] z-20 space-x-2">
          {" "}
          <SearchComponent search={search} />
        </div>

        {/* <---- Logo ----> */}
        <div className="mb-9">
          <div className=" bg-salonLogo bg-cover bg-center-center bg-no-repeat h-[65px] w-[65px] mx-auto from-green-500 to-white mt-9"></div>

          <h1 className="text-white text-center font-bold text-lg mt-2">
            Yakira Beauty Spot
          </h1>
        </div>

        {/* <---- Menu ----> */}
        <MenuItems />

        <div className="text-white bg-white/8  mt-12 text-sm z-30">
          {/* <---- Appointment ----> */}
          <div className="w-1/2 mx-auto pt-[30px]">
            <Button className="p-4 bg-[#edcf56] rounded-full font-semibold uppercase text-[#333] tracking-wide hover:bg-yellow-600 hover:shadow-lg">
              Make An Appointment
            </Button>
          </div>

          {/* <---- Contact ----> */}
          <div className="grid grid-cols-2 gap-4 w-[90%] mx-auto pt-[30px] ">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center text-[#fff] space-x-2"
              >
                <Image
                  src={info.icon}
                  alt={info.name}
                  width={24}
                  height={24}
                  className="object-contain "
                />

                <p className="text-balance">{info.info}</p>
              </div>
            ))}
          </div>

          {/* <---- Social ----> */}
          <div className="absolute bottom-[40px] w-full">
            <div className=" flex items-center w-[80%] mx-auto justify-between">
              <Socials />
              <div className="h-[2.8px] w-[40%] hover:opacity-100 bg-white opacity-50 "></div>
            </div>
          </div>
        </div>
      </div>
      {/* overlay */}
      <div className="absolute inset-0 bg-[#099db3] bg-custom-gradient opacity-80 h-full w-full z-10"></div>
    </nav>
  );
};

export default navBar;
