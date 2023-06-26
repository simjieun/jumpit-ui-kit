import styled, { css } from "styled-components";
import {
  ButtonVariants,
  ButtonColorSchemes,
  ButtonSizes,
  ButtonShapes,
} from "./type";

const getButtonSize = (size: ButtonSizes) => {
  switch (size) {
    case ButtonSizes.TINY:
      return css`
        height: 28px;
        font-weight: 700;
        font-size: 13px;
        line-height: 20px;
      `;
    case ButtonSizes.SMALL:
      return css`
        height: 36px;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
      `;
    case ButtonSizes.MEDIUM:
      return css`
        height: 40px;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
      `;
    case ButtonSizes.LARGE:
      return css`
        height: 48px;
        font-weight: 700;
        font-size: 15px;
        line-height: 24px;
      `;
    case ButtonSizes.XLAGRE:
      return css`
        height: 56px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      `;
    case ButtonSizes.XXLARGE:
      return css`
        height: 64px;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
      `;
    default:
      return null;
  }
};
const getButtonColor = (colorScheme: ButtonColorSchemes) => {
  switch (colorScheme) {
    case ButtonColorSchemes.PRIMARY:
      return css`
        background: #00dd6d;
        color: #fff;
        &:hover {
          background: #01c662;
        }
      `;
    case ButtonColorSchemes.BLACK:
      return css`
        background: #000;
        color: #fff;
        &:hover {
          background: #333;
        }
      `;
    case ButtonColorSchemes.GRAY:
      return css`
        background: #e4e4e4;
        color: #000;
        &:hover {
          background: #d4d4d4;
        }
      `;
    case ButtonColorSchemes.WHITE:
      return css`
        background: #fff;
        color: #000;
        &:hover {
          background: #f8f8f8;
        }
      `;
    default:
      return null;
  }
};
const getButtonVariant = (variant: ButtonVariants) => {
  switch (variant) {
    case ButtonVariants.OUTLINE:
      return css`
        border: 1px solid #d4d4d4;
      `;
    case ButtonVariants.LINK:
      return css`
        border: none;
      `;
    default:
      return null;
  }
};
const getButtonShape = (shape: ButtonShapes) => {
  switch (shape) {
    case ButtonShapes.SQUARE:
      return css`
        border-radius: 0;
      `;
    case ButtonShapes.ROUNDED:
      return css`
        border-radius: 8px;
      `;
    case ButtonShapes.CIRCLE:
      return css`
        border-radius: 50%;
      `;
    default:
      return null;
  }
};

export const Button = styled.button<{
  size: ButtonSizes;
  colorScheme: ButtonColorSchemes;
  variant?: ButtonVariants;
  shape?: ButtonShapes;
  disabled?: boolean;
}>`
  ${({ size }) => size && getButtonSize(size)}
  ${({ colorScheme }) => getButtonColor(colorScheme)}
  ${({ variant }) => variant && getButtonVariant(variant)}
  ${({ shape }) => shape && getButtonShape(shape)}
`;
