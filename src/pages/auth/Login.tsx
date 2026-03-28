import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { PATHS } from "@/constants/routes";
import { Link } from "react-router-dom";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginValidation = z.infer<typeof loginSchema>;

export default function Login() {
  const { handleSubmit, control } = useForm<LoginValidation>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: LoginValidation) => {
    return console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <Link to={PATHS.HOME} className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(192, 132, 252, 0.5)] bg-[rgba(192, 132, 252, 0.15)]">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-4h3l-4-7v4H9l4 7z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="mt-1 text-sm">Sign in to your account</p>
        </Link>

        <div className="rounded-2xl p-4">
          <form
            onSubmit={(e) => void handleSubmit(onSubmit)(e)}
            className="space-y-8"
          >
            <FieldGroup>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="text-rose-400 text-xs"
                      />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      {...field}
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="text-rose-400 text-xs"
                      />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <Button
              type="submit"
              className="w-full rounded-lg py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Login
            </Button>
          </form>
        </div>

        <p className="mt-2 text-center text-sm">
          Don't have an account?{" "}
          <Link
            to={PATHS.SIGNUP}
            className="font-medium transition-opacity hover:opacity-70 text-blue-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
