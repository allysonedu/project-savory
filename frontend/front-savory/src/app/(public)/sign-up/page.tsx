import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import logo from "../../../assets/login.svg";

export default function SignUp() {
  return (
    <main className="flex justify-center items-center ">
      <section className="flex h-100 border-r-orange-500 border-l-orange-500  m-30 border-4 rounded-3xl  justify-between">
        <div>
          <img src={logo.src} alt="" className="w-[350px] mr-15" />
        </div>
        <div className="m-10">
          <h1 className="text-black text-3xl m-5 font-bold">Cadastro</h1>
          <div className="flex my-5 items-center">
            <User className="mr-2" />
            <Input type="email" placeholder="Name" className="" />
          </div>
          <div className="flex my-5 items-center">
            <Mail className="mr-2" />
            <Input type="email" placeholder="Email" className="" />
          </div>
          <div className="flex mb-5  items-center">
            <Lock className="mr-2" />
            <Input type="email" placeholder="Email" className="" />
          </div>
          <Button className="mx-5 mb-2 w-full bg-[#FF725E] hover:bg-amber-700">
            Cadastrar-se
          </Button>
          <div>
            <p className="mt-2 text-center text-sm text-gray-500">
              já possui uma conta?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
