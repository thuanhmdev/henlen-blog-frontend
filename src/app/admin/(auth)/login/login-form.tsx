"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { ErrorMessage } from "@hookform/error-message";
import { apiPost } from "@/api/api";
import { TResponse } from "@/types/response";
import { TResponseUserLogin } from "@/types/user";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().min(1, { message: "This field is required" }).email({
      message: "Email invalidate",
    }),
    password: z.string().min(1, { message: "This field is required" }),
  });

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { statusCode, data, message, error } = await apiPost<
      TResponse<TResponseUserLogin>
    >("/api/v1/admin/auth/login", values);
    if (statusCode <= 299) {
      localStorage.setItem("access_token", data.accessToken);
      router.push("/admin/dashboard", { scroll: false });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
        action=""
        className="flex flex-col gap-y-6"
      >
        <div>
          <label htmlFor="title" className="font-bold block">
            Email
          </label>

          <Controller
            render={({ field }) => (
              <input
                type="email"
                className="w-full rounded-lg px-3 py-2 border-2 border-gray-300 hover:border-gray-400 outline-1 outline-gray-400 transition-all duration-200 ease-in-out"
                placeholder="Email"
                formNoValidate
                autoFocus
                {...field}
              />
            )}
            name="email"
            control={control}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p className="text-red-500 text-sm">{message}</p>
            )}
          />
        </div>
        <div>
          <label htmlFor="title" className="font-bold block">
            Password
          </label>

          <Controller
            render={({ field }) => (
              <input
                type="password"
                className="w-full rounded-lg px-3 py-2 border-2 border-gray-300 hover:border-gray-400 outline-1 outline-gray-400 transition-all duration-200 ease-in-out"
                placeholder="Password"
                {...field}
              />
            )}
            name="password"
            control={control}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <p className="text-red-500 text-sm">{message}</p>
            )}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 py-2 rounded-full text-white font-bold hover:bg-blue-500/80"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
