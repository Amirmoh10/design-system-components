import styled from "@emotion/styled";
import { defaultTheme,  } from "../Utilities";

const Button = styled.button`
  border: none;
  font-size: ${defaultTheme.fontSize};
  padding: 12px 24px;
  font-family: ${defaultTheme.primaryFont};
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  color: white;
  background-color: ${defaultTheme.primaryColor};
`;

export const SecondaryButton = styled(Button)`
  color: white;
  background-color: ${defaultTheme.secondaryColor};
`;

export const TertiaryButton = styled(Button)`
  color: white;
  background-color: ${defaultTheme.tertiaryColor};
`;
