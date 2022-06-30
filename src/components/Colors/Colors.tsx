import React, { CSSProperties } from "react";
import s from "./Colors.module.css";
import COLORS from "../../tokens/colors.json";

type ColorChipProps = {
  name: string;
  value: string;
};

const ColorChip: React.FC<ColorChipProps> = ({
  name = "--color-primary-8",
  value = "#3525e6",
}) => {
  const styles = {
    "--color-chip": `var(${name})`,
  } as CSSProperties;

  return (
    <div>
      <div className={s.colorChipColor} style={styles} />

      <p className={s.colorChipName}>{name}</p>
      <pre className={s.colorChipValue}>
        <code>{value}</code>
      </pre>
    </div>
  );
};

export const Colors = () => (
  <div className={s.colors}>
    {Object.keys(COLORS).map((color) => (
      <ColorChip key={color} name={color} value={COLORS[color]} />
    ))}
  </div>
);
