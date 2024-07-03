import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StepInterface } from "@/types";
import { Input } from "@/components/ui/input";
import { MdArrowForwardIos } from "react-icons/md";
import { Button } from "@/components/ui/button";

const StepThree = ({ nextStep }: StepInterface) => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="negotiable ">Negotiable</label>
          <RadioGroup
            defaultValue="yes"
            className="flex gap-10 text-[0.75rem] mt-8"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <label htmlFor="yes">Yes</label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <label htmlFor="no">No</label>
            </div>
          </RadioGroup>
        </div>

        <div className="mt-28 space-y-10">
          <div className="grid grid-cols-2 items-center">
            <h3>Short Time</h3>

            <div className="relative">
              <span className="absolute text-grayblack pt-0.5 inset-y-0 left-0 pl-3 flex items-center">
                ₦
              </span>
              <Input
                type="number"
                placeholder="Enter an Amount"
                className="pl-8 bg-transparent border border-yellow border-opacity-15 placeholder:text-grayblack"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center">
            <h3>Overnight</h3>

            <div className="relative">
              <span className="absolute text-grayblack pt-0.5 inset-y-0 left-0 pl-3 flex items-center">
                ₦
              </span>
              <Input
                type="number"
                placeholder="Enter an Amount"
                className="pl-8 bg-transparent border border-yellow border-opacity-15 placeholder:text-grayblack"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center">
            <h3>Home service</h3>

            <div className="relative">
              <span className="absolute text-grayblack pt-0.5 inset-y-0 left-0 pl-3 flex items-center">
                ₦
              </span>
              <Input
                type="number"
                placeholder="Enter an Amount"
                className="pl-8 bg-transparent border border-yellow border-opacity-15 placeholder:text-grayblack"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center">
            <h3>Hotel service</h3>

            <div className="relative">
              <span className="absolute text-grayblack pt-0.5 inset-y-0 left-0 pl-3 flex items-center">
                ₦
              </span>
              <Input
                type="number"
                placeholder="Enter an Amount"
                className="pl-8 bg-transparent border border-yellow border-opacity-15 placeholder:text-grayblack"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center">
            <h3>24Hours Stay</h3>

            <div className="relative">
              <span className="absolute text-grayblack pt-0.5 inset-y-0 left-0 pl-3 flex items-center">
                ₦
              </span>
              <Input
                type="number"
                placeholder="Enter an Amount"
                className="pl-8 bg-transparent border border-yellow border-opacity-15 placeholder:text-grayblack"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center">
            <h3>Weekend Stay</h3>

            <div className="relative">
              <span className="absolute text-grayblack pt-0.5 inset-y-0 left-0 pl-3 flex items-center">
                ₦
              </span>
              <Input
                type="number"
                placeholder="Enter an Amount"
                className="pl-8 bg-transparent border border-yellow border-opacity-15 placeholder:text-grayblack"
              />
            </div>
          </div>
        </div>

        <div className="mt-[4.2rem]">
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

export default StepThree;
