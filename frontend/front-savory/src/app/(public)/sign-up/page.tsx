"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import logo from "../../../assets/login.svg";

import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { users } from "@/api/savory-api";

const signUpFormValidationSchema = zod.object({
  name: zod.string(),
  email: zod.string().email("Digite um email válido"),
  password: zod.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type SignUpFormType = zod.infer<typeof signUpFormValidationSchema>;

export default function SignUp() {
  const navigate = useRouter();

  const methods = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const handleSignUp = useCallback(
    async (data: SignUpFormType) => {
      try {
        await users({
          name: data.name,
          email: data.email,
          password: data.password,
        });
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
        <div>
          <img src={logo.src} alt="" className="w-[350px] mr-15" />
        </div>
        <form onSubmit={handleSubmit(handleSignUp)} className="m-10">
          <h1 className="text-black text-3xl m-5 font-bold">Cadastro</h1>
          <div className="flex my-5 items-center">
            <User className="mr-2" />
            <Input
              id="name"
              {...register("name")}
              type="text"
              placeholder="Name"
              className=""
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex my-5 items-center">
            <Mail className="mr-2" />
            <Input
              id="email"
              {...register("email")}
              type="email"
              placeholder="Email"
              className=""
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex mb-5  items-center">
            <Lock className="mr-2" />
            <Input
              id="password"
              {...register("password")}
              type="password"
              placeholder="Senha"
              className=""
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="mx-5 mb-2 w-full bg-[#FF725E] hover:bg-amber-700"
          >
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
        </form>
      </section>
    </main>
  );
}
