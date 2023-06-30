import { ButtonHTMLAttributes, FC, ReactElement } from "react";
import {
  ButtonVariants,
  ButtonColorSchemes,
  ButtonShapes,
  ButtonSizes,
} from "./type";
import * as Styled from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSizes;
  colorScheme: ButtonColorSchemes;
  variant?: ButtonVariants;
  shape?: ButtonShapes;
  children: string | ReactElement;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  size,
  colorScheme = "primary",
  variant,
  shape,
  isDisabled,
  children,
  onClick,
}) => {
  return (
    <Styled.Button
      size={size}
      colorScheme={colorScheme}
      variant={variant}
      shape={shape}
      isDisabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </Styled.Button>
  );
};
