import styled, { css } from "styled-components";
import {
  ButtonVariants,
  ButtonColorSchemes,
  ButtonSizes,
  ButtonShapes,
} from "./type";

const getButtonSize = (size: ButtonSizes) => {
  switch (size) {
    case "tiny":
      return css`
        min-width: 60px;
        height: 28px;
        padding: 0 8px;
        font-weight: 700;
        font-size: 13px;
        line-height: 20px;
      `;
    case "small":
      return css`
        min-width: 82px;
        height: 36px;
        padding: 0 16px;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
      `;
    case "medium":
      return css`
        min-width: 82px;
        height: 40px;
        padding: 0 16px;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
      `;
    case "large":
      return css`
        min-width: 82px;
        height: 48px;
        padding: 0 16px;
        font-weight: 700;
        font-size: 15px;
        line-height: 24px;
      `;
    case "xlarge":
      return css`
        min-width: 82px;
        height: 56px;
        padding: 0 16px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      `;
    case "xxlarge":
      return css`
        min-width: 82px;
        height: 64px;
        padding: 0 16px;
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
    case "primary":
      return css`
        background: #00dd6d;
        color: #fff;
        &:hover {
          background: #01c662;
        }
      `;
    case "black":
      return css`
        background: #000;
        color: #fff;
        &:hover {
          background: #333;
        }
      `;
    case "gray":
      return css`
        background: #e4e4e4;
        color: #000;
        &:hover {
          background: #d4d4d4;
        }
      `;
    case "white":
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
    case "filled":
      return css`
        border: none;
      `;
    case "outline":
      return css`
        border: 1px solid #d4d4d4;
      `;
    case "link":
      return css`
        border: none;
      `;
    default:
      return null;
  }
};
const getButtonShape = (shape: ButtonShapes) => {
  switch (shape) {
    case "square":
      return css`
        border-radius: 0;
      `;
    case "rounded":
      return css`
        border-radius: 8px;
      `;
    case "circle":
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
  isDisabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ size }) => size && getButtonSize(size)}
  ${({ colorScheme }) => getButtonColor(colorScheme)}
  ${({ variant }) => variant && getButtonVariant(variant)}
  ${({ shape }) => shape && getButtonShape(shape)}
`;
