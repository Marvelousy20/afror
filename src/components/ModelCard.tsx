"use client";
import { useState } from "react";

import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { MdWhatsapp, MdOutlineCall, MdAdd, MdMoreHoriz } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import {
  MdOutlineAccountCircle,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ModelCard = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-[#000] rounded-[14px] p-4 mt-4">
      <div className="flex items-center justify-between">
        <p className="flex items-center italic text-sm gap-2">
          Sexy Sharon <BadgeCheck color="white" fill="#FFCC4D" size={17} />
        </p>

        <div className="" onClick={() => setOpen(!isOpen)}>
          <MdMoreHoriz size={24} />
        </div>
      </div>
      <div className="w-full mt-4">
        <Image
          src="/sharon.svg"
          alt="sharon"
          width={364}
          height={456}
          className="w-full"
        />
      </div>
      <p className="italic text-grayblack text-[0.75rem] mt-2">
        I’m the same girl you have been longing for, i know you like a wet
        pussy, i will fufill all your fantacies.. Read more
      </p>

      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-4 items-center">
          <p className="bg-[#25D366] p-2 inline-flex rounded-md">
            <MdWhatsapp size={16} color="white" />
          </p>

          <p className="bg-[#FFCC4D] p-2 inline-flex rounded-md">
            <MdOutlineCall size={16} color="black" />
          </p>

          <p className="bg-[#0088CC] p-2 inline-flex rounded-md">
            <FaTelegramPlane size={16} color="white" />
          </p>
        </div>

        <button className="text-[#FFCC4D] border border-[#FFCC4D] test-sm flex items-center italic gap-1 px-2.5 py-1.5 rounded-md">
          <MdAdd size={20} />
          Favorite
        </button>
      </div>

      <Drawer open={isOpen} onOpenChange={setOpen}>
        <DrawerContent className="focus:outline-none">
          <div className="mt-12 mb-4 italic text-grayblack px-8">
            <ul className="grid gap-y-4">
              <li className="p-2.5 flex items-center justify-between">
                <span className="flex items-center gap-5">
                  <span>
                    <MdOutlineAccountCircle size={24} />
                  </span>
                  <span className="text-lg">View profile</span>
                </span>

                <span>
                  <MdOutlineArrowForwardIos size={18} />
                </span>
              </li>
              <li className="p-2.5 flex items-center justify-between">
                <span className="flex items-center gap-5">
                  <span>
                    <Image
                      src="/gallery_thumbnail.svg"
                      alt="gallary"
                      width={24}
                      height={24}
                    />
                  </span>
                  <span className="text-lg">View gallery</span>
                </span>

                <span>
                  <MdOutlineArrowForwardIos size={18} />
                </span>
              </li>
              <li className="p-2.5 flex items-center justify-between">
                <span className="flex items-center gap-5">
                  <span>
                    <Image
                      src="/local_fire_department.svg"
                      alt="gallary"
                      width={24}
                      height={24}
                    />
                  </span>
                  <span className="text-lg">View Naughty</span>
                </span>

                <span>
                  <MdOutlineArrowForwardIos size={18} />
                </span>
              </li>
              <li className="p-2.5 flex items-center justify-between">
                <span className="flex items-center gap-5">
                  <span>
                    <Image
                      src="/share.svg"
                      alt="gallary"
                      width={18}
                      height={20}
                    />
                  </span>
                  <span className="text-lg">Share</span>
                </span>

                <span>
                  <MdOutlineArrowForwardIos size={18} />
                </span>
              </li>
              <li className="p-2.5 flex items-center justify-between">
                <span className="flex items-center gap-5">
                  <span>
                    <Image
                      src="/report.svg"
                      alt="gallary"
                      width={24}
                      height={24}
                    />
                  </span>
                  <span className="text-lg">Report</span>
                </span>

                <span className="flex items-center gap-9">
                  <span className="text-[#DD3535]">128</span>

                  <span>
                    <MdOutlineArrowForwardIos size={18} />
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ModelCard;
