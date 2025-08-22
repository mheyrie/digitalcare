"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
 
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const PasskeyModal = () => {
    const router = useRouter();
  const [open, setOpen] = useState(true);

  const closeModal = () => {
    setOpen(false);
    router.push('/');
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-start justify-between">Admin Access Verification

            <Image
              src="/assets/icons/close.svg"
              alt="Close"
              width={20}
              height={20}
              className="ml-2 cursor-pointer"
              onClick={() => closeModal()}
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default PasskeyModal;
