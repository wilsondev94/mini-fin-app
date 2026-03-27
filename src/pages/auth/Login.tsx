import { Button } from "@/components/ui/Button";
import { PATHS } from "@/constants/routes";
import { Link } from "react-router-dom";

export default function Login() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("SUBMITTED");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <Link to={PATHS.HOME} className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(192, 132, 252, 0.5)] bg-[rgba(192, 132, 252, 0.15)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              style={{ color: "var(--accent)" }}
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-4h3l-4-7v4H9l4 7z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
          <p className="mt-1 text-sm text-white/80">Sign in to your account</p>
        </Link>

        <div className="rounded-2xl p-8">
          <form onSubmit={(e) => void handleSubmit(e)}>
            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start flex-col">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-white"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  //   value={form.email}
                  //   onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg px-3.5 text-white py-2.5 text-sm outline-none transition-all bg-gray-800"
                />
              </div>

              {/* Password */}
              <div className="flex items-start flex-col">
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-white"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  //   value={form.password}
                  //   onChange={handleChange}
                  className="w-full rounded-lg bg-gray-800 text-white px-3.5 py-2.5 text-sm outline-none transition-all"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-lg py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                style={{ background: "var(--accent)" }}
              >
                Login
              </Button>
            </div>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-white/70">
          Don't have an account?{" "}
          <Link
            to={PATHS.SIGNUP}
            className="font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
