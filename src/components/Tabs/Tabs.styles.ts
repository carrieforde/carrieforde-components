import styled from "@emotion/styled";
import { BaseButton, BaseButtonProps } from "../Button/Button.styles";

export const BaseTabs = styled("div")(({ theme }) => {
  const { spacing } = theme;

  return {
    marginTop: spacing(4),
  };
});

export const BaseTabList = styled("div")(({ theme }) => {
  const { palette, spacing } = theme;

  return {
    display: "flex",
    flexWrap: "wrap",
    gap: `0 ${spacing(2)}`,
    lineHeight: 1,
    overflowX: "auto",
    whiteSpace: "nowrap",

    "&:after": {
      backgroundColor: palette.default[300],
      content: "''",
      display: "block",
      flexBasis: "100%",
      height: "2px",
      width: "100%",
    },

    "&::-webkit-scrollbar": {
      width: 0,
    },
  };
});

export type BaseTabButtonProps = {
  active: boolean;
} & BaseButtonProps;

export const BaseTabButton = styled(BaseButton)<BaseTabButtonProps>(
  ({ theme, active }) => {
    const { fontSize, palette, spacing } = theme;

    return {
      color: palette.default[800],
      fontSize: fontSize(14),
      fontWeight: 300,
      padding: `0 0 ${spacing(1)} 0`,
      position: "relative",
      textAlign: "center",

      "&:after": {
        backgroundColor: palette.primary.main,
        bottom: "-2px",
        content: "''",
        display: "block",
        height: "2px",
        position: "absolute",
        transition: "width 0.3s ease",
        width: active ? "100%" : 0,
      },
    };
  }
);

export const BaseTabPanel = styled("div")(({ theme }) => {
  const { spacing } = theme;

  return {
    marginTop: spacing(4),
  };
});
