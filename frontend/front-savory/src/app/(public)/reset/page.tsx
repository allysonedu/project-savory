import logo from "../../../assets/login.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";

export default function ResetPage() {
  return (
    <main className="flex justify-center items-center ">
      <section className="flex h-100 border-r-orange-500 border-l-orange-500  m-30 border-4 rounded-3xl  justify-between">
        <div className="m-15">
          <h1 className="text-black text-3xl m-5 font-bold">Reset Password</h1>
          <div className="flex my-5 items-center">
            <Lock className="mr-2" />
            <Input type="password" placeholder="Password" className="" />
          </div>
          <div className="flex mb-5  items-center">
            <Lock className="mr-2" />
            <Input
              type="password"
              placeholder="Confirm Password"
              className=""
            />
          </div>
          <Button className="mx-5 mb-2 w-full bg-[#FF725E] hover:bg-amber-700">
            Confirmar
          </Button>
          <div>
            {/* <p className="mt-6 text-center text-sm text-gray-500">
              Não possui uma conta?{" "}
              <Link href="/sign-up" className="text-blue-500 hover:underline">
                Crie sua conta
              </Link>
            </p> */}
          </div>
        </div>
        <div>
          <img src={logo.src} alt="" className="w-[350px] mr-15" />
        </div>
      </section>
    </main>
  );
}
