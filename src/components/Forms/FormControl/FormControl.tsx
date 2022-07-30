import styled from "@emotion/styled";
import { ComponentTheme } from "../../../theme";

export type FormControlProps = {
  split?: boolean;
};

export const FormControl = styled("div")<FormControlProps>(
  ({ theme, split }) => {
    const { spacing } = theme as ComponentTheme;
    return {
      flexBasis: "100%",

      "@media screen and (min-width: 600px)": {
        flexBasis: split ? `calc(50% - ${spacing(1)})` : "100%",
      },
    };
  }
);
