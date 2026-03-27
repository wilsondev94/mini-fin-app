import { cn } from "@/lib/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all cursor-pointer",
        {
          "bg-indigo-600 text-white hover:bg-indigo-500": variant === "primary",
          "border border-white/10 text-slate-300 hover:bg-white/5":
            variant === "outline",
          "text-slate-400 hover:text-white": variant === "ghost",
          "opacity-50 cursor-not-allowed": disabled || isLoading,
        },
        className,
      )}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
