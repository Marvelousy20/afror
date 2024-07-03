import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";

const GuestSignUp = () => {
  return (
    <div className="mt-12">
      <form action="">
        <div className="space-y-2.5">
          <label htmlFor="username">Username</label>
          <Input type="text" />
        </div>

        <div className="mt-12 space-y-2.5">
          <label htmlFor="username">Password</label>
          <Input type="password" />
        </div>

        <div className="mt-[7rem]">
          <Button className="text-xl w-full text-[#000] space-x-4">
            <span>Sign Up</span>
            <div className="flex items-center">
              <MdArrowForwardIos />
              <MdArrowForwardIos />
              <MdArrowForwardIos />
            </div>
          </Button>
        </div>
      </form>

      <div className="text-center mt-[6.5rem] text-white">
        Powered by <span className="text-[#FFCC4D]">Afro</span>
        <span>Runs</span>
      </div>
    </div>
  );
};

export default GuestSignUp;
