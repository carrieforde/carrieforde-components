import React, { forwardRef, ReactNode } from "react";
import {
  BaseButton,
  BaseButtonProps,
  FilledButton,
  OutlineButton,
} from "./Button.styles";

export type ButtonProps = {
  children: ReactNode;
  variant?: "text" | "outline" | "filled";
  component?: React.ElementType<any> | undefined;
  to?: string;
} & BaseButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, component, to, ...props }, ref) => {
    if (component === "a" && !to) {
      throw new Error("Links-as-buttons require a `to` prop!");
    }

    if (variant === "filled") {
      return (
        <FilledButton ref={ref} as={component} href={to} {...props}>
          {children}
        </FilledButton>
      );
    }

    if (variant === "outline") {
      return (
        <OutlineButton ref={ref} as={component} href={to} {...props}>
          {children}
        </OutlineButton>
      );
    }

    return (
      <BaseButton ref={ref} as={component} href={to} {...props}>
        {children}
      </BaseButton>
    );
  }
);

// export const Button: FC<ButtonProps> = ({ children, variant, ...props }) => {
//   if (variant === "filled") {
//     return <FilledButton {...props}>{children}</FilledButton>;
//   }

//   if (variant === "outline") {
//     return <OutlineButton {...props}>{children}</OutlineButton>;
//   }

//   return <BaseButton {...props}>{children}</BaseButton>;
// };
