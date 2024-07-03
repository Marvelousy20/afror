"use client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MdArrowForwardIos } from "react-icons/md";
import { StepInterface } from "@/types";

interface Options {
  id: string;
  label: string;
}

const options: Options[] = [
  {
    id: "anal",
    label: "Anal rimming",
  },
  {
    id: "cum",
    label: "Cum In Mouth",
  },
  {
    id: "Blowjob",
    label: "Blowjob",
  },
  {
    id: "BDSMr",
    label: "BDSM(Recie..",
  },
  {
    id: "bdsm",
    label: "BDSM",
  },
  {
    id: "Lesbian",
    label: "Lesbian",
  },

  {
    id: "anal",
    label: "Anal rimming",
  },
  {
    id: "cum",
    label: "Cum In Mouth",
  },
  {
    id: "Blowjob",
    label: "Blowjob",
  },
  {
    id: "BDSMr",
    label: "BDSM(Recie..",
  },
  {
    id: "bdsm",
    label: "BDSM",
  },
  {
    id: "Lesbian",
    label: "Lesbian",
  },

  {
    id: "anal",
    label: "Anal rimming",
  },
  {
    id: "cum",
    label: "Cum In Mouth",
  },
  {
    id: "Blowjob",
    label: "Blowjob",
  },
  {
    id: "BDSMr",
    label: "BDSM(Recie..",
  },
  {
    id: "bdsm",
    label: "BDSM",
  },
  {
    id: "Lesbian",
    label: "Lesbian",
  },

  {
    id: "anal",
    label: "Anal rimming",
  },
  {
    id: "cum",
    label: "Cum In Mouth",
  },
  {
    id: "Blowjob",
    label: "Blowjob",
  },
  {
    id: "BDSMr",
    label: "BDSM(Recie..",
  },
  {
    id: "bdsm",
    label: "BDSM",
  },
  {
    id: "Lesbian",
    label: "Lesbian",
  },
  {
    id: "anal",
    label: "Anal rimming",
  },
  {
    id: "cum",
    label: "Cum In Mouth",
  },
  {
    id: "Blowjob",
    label: "Blowjob",
  },
  {
    id: "BDSMr",
    label: "BDSM(Recie..",
  },
  {
    id: "bdsm",
    label: "BDSM",
  },
  {
    id: "Lesbian",
    label: "Lesbian",
  },
] as const;


const StepTwo = ({ nextStep }: StepInterface) => {
  // array of ids
  const [values, setValues] = useState<String[]>([]);

  const handleCheckboxChange = (value: string) => {
    setValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="mt-14">
      <div className="mb-12">
        <h1 className="text-lg mb-2">Services</h1>
        <span className="text-yellow">
          Kindly Select at least 5 services and more...
        </span>
      </div>
      <form action="">
        <div className="grid grid-cols-2 gap-y-6">
          {options.map((option) => (
            <div key={option.id} className="">
              <Checkbox
                checked={values.includes(option.id)}
                onCheckedChange={() => handleCheckboxChange(option.id)}
                id={option.id}
                className="mr-2"
              />

              <label
                htmlFor={option.id}
                className="text-white text-opacity-75 text-[0.75rem]"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-[5rem]">
          <Button
            className="text-xl w-full text-[#000] space-x-4"
            onClick={nextStep}
          >
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

export default StepTwo;
