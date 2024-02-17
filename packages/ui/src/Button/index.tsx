import { cn } from "./../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  label?: string | React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const buttonVariants = cva(
  "ui-min-h-14 ui-w-full ui-rounded-xl ui-text-white ui-text-lg ui-font-semibold ui-flex ui-items-center ui-justify-center",
  {
    variants: {
      variant: {
        primary: "ui-bg-_accent-primary ui-text-_accent-primary-content",
        secondary: "ui-bg-_accent-secondary ui-text-_accent-secondary-content",
        primary_outline: "ui-bg-transparent ui-border ui-border-_accent-primary ui-text-_accent-primary",
        secondary_outline: "ui-bg-transparent ui-border ui-border-_accent-secondary ui-text-_accent-secondary",
        destructive: "ui-bg-red-500",
        ghost: "ui-bg-transparent ui-text-_accent-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button = ({
  onClick,
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
        loading ? "ui-cursor-not-allowed ui-opacity-50" : "ui-cursor-pointer",
        disabled ? "ui-cursor-not-allowed ui-opacity-50" : "ui-cursor-pointer",
        className
      )}
    >
      {children ? children : label}
    </button>
  );
};


export default Button;