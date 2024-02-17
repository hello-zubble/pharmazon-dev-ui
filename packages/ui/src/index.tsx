import { cn } from "./lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

import React from "react";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string | React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
}

const buttonVariants = cva(
  "min-h-14 w-full rounded-xl text-white text-lg font-semibold flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-accent-primary",
        secondary: "bg-accent-secondary",
        outline:
          "bg-transparent border border-accent-primary text-accent-primary-content",
        destructive: "bg-red-500",
        ghost: "bg-transparent text-accent-orange",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Button = ({
  label,
  loading,
  children,
  className,
  disabled,
  variant,
  ...props
}: Props) => {
  return (
    <button disabled={disabled || loading}
    {...props}
      className={cn(
        buttonVariants({ variant }),
        loading ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      )}
    >
      {children ? children : label}
    </button>
  );
};

export default Button;