"use client";
import logo from "../../../assets/login.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/auth";
import { useCallback } from "react";

const loginFormValidationSchema = zod.object({
  email: zod.string().email("Digite um email válido"),
  password: zod.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type LoginFormType = zod.infer<typeof loginFormValidationSchema>;

export default function LoginPage() {
  const navigate = useRouter();
  const { signIn } = useAuth();

  const methods = useForm<LoginFormType>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const handleLogin = useCallback(
    async (data: LoginFormType) => {
      try {
        const result = await signIn({
          email: data.email,
          password: data.password,
        });
        navigate.push("/sign-up");
      } catch (error: any) {
        console.log(error);
      }
    },
    [navigate, signIn]
  );
  return (
    <main className="flex justify-center items-center ">
      <section className="flex h-100 border-r-orange-500 border-l-orange-500  m-30 border-4 rounded-3xl  justify-between">
        <form onSubmit={handleSubmit(handleLogin)} className="m-15">
          <h1 className="text-black text-3xl m-5 font-bold">Login</h1>
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
              {...register("password")}
              id="password"
              type="password"
              placeholder="Email"
              className=""
            />
          </div>
          <Button
            type="submit"
            className="mx-5 mb-2 w-full bg-[#FF725E] hover:bg-amber-700"
          >
            Logar
          </Button>
          <div>
            <a
              href="/forgot"
              className="mt-6 text-center text-sm text-blue-500 hover:underline"
            >
              Esqueceu a senha?
            </a>

            <p className="mt-6 text-center text-sm text-gray-500">
              Não possui uma conta?{" "}
              <Link href="/sign-up" className="text-blue-500 hover:underline">
                Crie sua conta
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
