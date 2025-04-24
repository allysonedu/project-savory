import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, StepBack } from "lucide-react";
import logo from "../../../assets/login.svg";
import Link from "next/link";

export default function ForgotPage() {
  return (
    <main className="flex justify-center items-center ">
      <section className="flex h-100 border-r-orange-500 border-l-orange-500  m-30 border-4 rounded-3xl  justify-between">
        <div className="m-15">
          <h1 className="text-black text-3xl m-5 font-bold">Forgot Password</h1>
          <div className="flex my-5 items-center">
            <Mail className="mr-2" />
            <Input type="email" placeholder="Email" className="" />
          </div>

          <Button className="mx-5 mb-2 w-full cursor-pointer bg-[#FF725E] hover:bg-amber-700">
            Enviar
          </Button>
          <div>
            <p className="mt-6 text-center text-sm text-gray-500">
              <Link
                href="/login"
                className="text-blue-500 hover:underline items-center flex justify-center"
              >
                <StepBack className="size-5" /> Voltar
              </Link>
            </p>
          </div>
        </div>
        <div>
          <img src={logo.src} alt="" className="w-[350px] mr-15" />
        </div>
      </section>
    </main>
  );
}
