import { Typography as ThemeTypography } from "./Typography";
import React from "react";
import styles from "./Typography.module.css";

export default {
  title: "Typography",
  component: ThemeTypography,
};

const text = "The quick brown fox jumps over the lazy dog.";

export const Typography = () => (
  <>
    <ThemeTypography>{text}</ThemeTypography>
  </>
);

// export const Paragraph = () => (
//   <Typography></Typography>
// );

// export const H1 = () => (
//   <Typography variant="title" component="h1" className={styles["custom-title"]}>
//     The quick brown fox jumps over the lazy dog.
//   </Typography>
// );

// export const H2 = () => (
//   <Typography.H2>The quick brown fox jumps over the lazy dog.</Typography.H2>
// );

// export const H3 = () => (
//   <Typography.H3>The quick brown fox jumps over the lazy dog.</Typography.H3>
// );

// export const H4 = () => (
//   <Typography.H4>The quick brown fox jumps over the lazy dog.</Typography.H4>
// );

// export const H5 = () => (
//   <Typography.H5>The quick brown fox jumps over the lazy dog.</Typography.H5>
// );

// export const H6 = () => (
//   <Typography.H6>The quick brown fox jumps over the lazy dog.</Typography.H6>
// );
