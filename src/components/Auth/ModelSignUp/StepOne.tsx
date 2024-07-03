import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { IoMdAdd } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea";
import { MdArrowForwardIos } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { StepInterface } from "@/types";

const StepOne = ({ nextStep }: StepInterface) => {
  return (
    <div className="pb-10">
      <form action="">
        <div>
          <label htmlFor="gender">Gender</label>
          <RadioGroup
            defaultValue="male"
            className="flex justify-between text-[0.75rem] mt-8"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <label htmlFor="male">Male</label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <label htmlFor="female">Female</label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="trans" id="trans" />
              <label htmlFor="trans">Trans</label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-10 mt-10">
          <div className="space-y-2.5">
            <label htmlFor="username" className="text-sm">
              Username
            </label>
            <Input type="text" id="username" />
            <span className="text-[0.5rem] leading-[12.37px]">
              This is the name that will be visible to all clients on the
              AfroRons feed. please do not use your real name as it will bee
              seen by everyone, please Note that this cannot be changed after
              verification.
            </span>
          </div>

          <div className="space-y-2.5">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <Input type="email" id="email" />
          </div>

          <div className="space-y-2.5">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <Input type="password" id="password" />
          </div>

          <div className="space-y-2.5">
            <label htmlFor="repassword" className="text-sm">
              Re-Password
            </label>
            <Input type="password" id="repassword" />
          </div>

          <div className="space-y-2.5">
            <label htmlFor="country" className="text-sm">
              Country
            </label>
            <Input type="text" id="country" />

            <span className="text-[0.5rem] leading-[12.37px]">
              Kindly select a country which you have access to it’s phone number
              your location on AfroRuns is determine by both your Country and
              phone number.
            </span>
          </div>

          <div className="space-y-2.5">
            <label htmlFor="state" className="text-sm">
              State of Origin
            </label>
            <Input type="state" id="number" />
          </div>

          <div className="space-y-2.5">
            <label htmlFor="number" className="text-sm">
              Phone number
            </label>
            <Input type="number" id="number" />

            <span className="text-[0.5rem] leading-[12.37px]">
              Kindly select an active phone number that matches the country you
              selected above as it cannot be changed once your registration is
              completed.
            </span>
          </div>

          <div className="space-y-2.5">
            <label htmlFor="state" className="text-sm">
              Language Spoken
            </label>
            <Input type="state" id="number" />
            <span className="text-[0.5rem] leading-[12.37px]">
              Select a Language you are Fluent in..
            </span>

            <div className="text-yellow flex justify-end">
              <button className="flex items-center">
                <IoMdAdd size={20} />
                Add Language
              </button>
            </div>
          </div>

          <div className="space-y-2.5">
            <label htmlFor="state" className="text-sm">
              Sexual Orientation
            </label>
            <Input type="text" id="state" />
          </div>

          <div className="">
            <h1 className="text-lg">Body Details</h1>
          </div>

          <div className="space-y-2.5">
            <label htmlFor="skin" className="text-sm">
              Skin Colour
            </label>
            <Input type="text" id="skin" />
          </div>

          <div className="space-y-2.5">
            <label htmlFor="booty" className="text-sm">
              Booty/ass Size
            </label>
            <Input type="text" id="booty" />
          </div>

          <div className="space-y-2.5">
            <label htmlFor="boobs" className="text-sm">
              Boobs size
            </label>
            <Input type="text" id="boobs" />
          </div>

          <div className="space-y-2.5">
            <label htmlFor="height" className="text-sm">
              Height
            </label>
            <Input type="text" id="height" />
          </div>

          <div className="space-y-2.5">
            <label htmlFor="weight" className="text-sm">
              Weight
            </label>
            <Input type="text" id="weight" />
          </div>

          <div>
            <label htmlFor="smoker">Smoker</label>
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

          <div>
            <div className="space-y-2.5">
              <label htmlFor="weight" className="text-sm">
                Bio
              </label>
              <Textarea
                placeholder="This will be displayed on your Profile so tell Clients what you can offer."
                id="bio"
              />
            </div>
          </div>
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

export default StepOne;
