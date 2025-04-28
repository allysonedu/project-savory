"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, StepBack } from "lucide-react";
import logo from "../../../assets/login.svg";
import Link from "next/link";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPassword } from "@/api/savory-api";

const forgotPasswordValidationSchema = zod.object({
  email: zod.string().email("Digite um email válido"),
});

type ForgotPasswordFormType = zod.infer<typeof forgotPasswordValidationSchema>;

export default function ForgotPage() {
  const navigate = useRouter();

  const methods = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgotPasswordValidationSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const handleForgotPassword = useCallback(
    async (data: ForgotPasswordFormType) => {
      try {
        await forgotPassword(data.email);
        navigate.push("/reset");
      } catch (error: any) {
        console.log(error);
      }
    },
    [navigate]
  );

  return (
    <main className="flex justify-center items-center ">
      <section className="flex h-100 border-r-orange-500 border-l-orange-500  m-30 border-4 rounded-3xl  justify-between">
        <form onSubmit={handleSubmit(handleForgotPassword)} className="m-15">
          <h1 className="text-black text-3xl m-5 font-bold">Forgot Password</h1>
          <div className="flex my-5 items-center">
            <Mail className="mr-2" />
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Email"
              className=""
            />
          </div>

          <Button
            type="submit"
            className="mx-5 mb-2 w-full cursor-pointer bg-[#FF725E] hover:bg-amber-700"
          >
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
        </form>
        <div>
          <img src={logo.src} alt="" className="w-[350px] mr-15" />
        </div>
      </section>
    </main>
  );
}
