"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import { Copy, Info } from "lucide-react";
import toast from "react-hot-toast";

export default function Page() {
  const onCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };
  return (
    <div className="flex flex-col">
      <Alert variant="custom" className="w-[300px] mx-auto">
        <AlertTitle>
          <div className="flex">
            <Info className="h-4 w-4 mr-2" />
            Test Data
          </div>
        </AlertTitle>
        <AlertDescription>
          <div className="flex gap-2">
            <p className="">Email: </p>
            <p>test+clerk_test@gmail.com</p>
            <Button
              variant="outline"
              size="icon"
              className="w-6 h-6"
              onClick={() => onCopy("test+clerk_test@gmail.com")}
            >
              <Copy className="h-4 w-h" />
            </Button>
          </div>

          <div className="flex gap-2">
            <p className="">Password: </p>
            <p>testp4ss!</p>
            <Button
              variant="outline"
              size="icon"
              className="w-6 h-6"
              onClick={() => onCopy("testp4ss!")}
            >
              <Copy className="h-4 w-h" />
            </Button>
          </div>
        </AlertDescription>
      </Alert>
      <SignIn />
    </div>
  );
}
