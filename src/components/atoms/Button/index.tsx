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
  colorScheme = "primary",
  variant,
  size,
  children,
}) => {
  return (
    <Styled.Button variant={variant} colorScheme={colorScheme} size={size}>
      {children}
    </Styled.Button>
  );
};
