"use client";
import { useState, useCallback } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdArrowForwardIos,
} from "react-icons/md";
import { useDropzone, FileWithPath } from "react-dropzone";
import { Button } from "@/components/ui/button";

interface Section {
  label: string;
  id: string;
  text: string;
}

const StepFour = () => {
  const [opened, setOpened] = useState<string | null>(null);
  const [files, setFiles] = useState<{ [key: string]: File[] }>({});

  const sections: Section[] = [
    {
      label: "Upload your profile photo",
      id: "profile-photo",
      text: "Please upload a profile picture, make sure its attractive and hot, it will be the first image Clients will see so you have only 1 chance to impress.",
    },
    {
      label: "Add to your Gallery",
      id: "gallery",
      text: "Please upload a profile picture, make sure its attractive and hot, it will be the first image Clients will see so you have only 1 chance to impress.",
    },
    {
      label: "Upload a verification video",
      id: "verification-video",
      text: "Please upload a profile picture, make sure its attractive and hot, it will be the first image Clients will see so you have only 1 chance to impress.",
    },
    {
      label: "Upload a Naughty",
      id: "naughty",
      text: "Please upload a profile picture, make sure its attractive and hot, it will be the first image Clients will see so you have only 1 chance to impress.",
    },
  ];

  const onDrop = useCallback((acceptedFiles: File[], sectionId: string) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [sectionId]: acceptedFiles,
    }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      if (opened) {
        onDrop(acceptedFiles, opened);
      }
    },
  });

  const handleToggle = (section: string) => {
    setOpened(opened === section ? null : section);
  };

  return (
    <div className="mt-[5.5rem]">
      <form action="" className="">
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.id}>
              <div className="flex justify-between items-center">
                <h3>{section.label}</h3>
                <div
                  className="h-[1.375rem] w-[1.375rem] rounded-full bg-yellow flex justify-center items-center cursor-pointer"
                  onClick={() => handleToggle(section.id)}
                >
                  {opened === section.id ? (
                    <MdOutlineKeyboardArrowUp size={20} />
                  ) : (
                    <MdOutlineKeyboardArrowDown size={20} />
                  )}
                </div>
              </div>

              {opened === section.id && (
                <div>
                  <div {...getRootProps()} className="mt-5">
                    <div className="border border-[#73737399] border-opacity-60 flex justify-center rounded-[5px] h-[11rem] items-center">
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <p>Drop the files here ...</p>
                      ) : (
                        <button className="border border-[#A29166] py-4 px-8 rounded-[5px] h-[55px]">
                          Select image
                        </button>
                      )}
                    </div>
                    {files[section.id]?.map((file, index) => (
                      <div key={index}>{file.name}</div>
                    ))}
                  </div>

                  <p className="text-sm text-[#A29166] mt-1.5">
                    {section.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-[5rem]">
          <Button className="text-xl w-full text-[#000] space-x-4">
            <span>Next</span>
            <div className="flex items-center">
              <MdArrowForwardIos />
              <MdArrowForwardIos />
              <MdArrowForwardIos />
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepFour;
