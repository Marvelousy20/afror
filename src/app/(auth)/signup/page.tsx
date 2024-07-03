import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import GuestSignUp from "@/components/Auth/GuestSignUp";
import ModelSignUp from "@/components/Auth/ModelSignUp/ModelSignUp";

const SignUp = () => {
  return (
    <div className="w-full px-10 mt-[8rem]">
      <Tabs className="w-full" defaultValue="guest">
        <TabsList className="w-full gap-[5.7rem] text-sm">
          <TabsTrigger value="guest">I&apos;m a Guest/Client</TabsTrigger>
          <TabsTrigger value="model">I&apos;m a Model</TabsTrigger>
        </TabsList>

        <TabsContent value="guest" className="text-sm italic">
          <GuestSignUp />
        </TabsContent>

        <TabsContent value="model" className="text-sm italic">
          <ModelSignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SignUp;
