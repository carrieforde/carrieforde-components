import styled from "@emotion/styled";
import { ComponentTheme } from "../../../theme";

export const BaseForm = styled("form")(({ theme }) => {
  const { spacing } = theme as ComponentTheme;

  return {
    display: "flex",
    flexWrap: "wrap",
    gap: spacing(2),
  };
});

export const FormActions = styled("div")(({ theme }) => {
  const { spacing } = theme as ComponentTheme;

  return {
    display: "flex",
    gap: spacing(2),
    marginTop: spacing(3),
  };
});
