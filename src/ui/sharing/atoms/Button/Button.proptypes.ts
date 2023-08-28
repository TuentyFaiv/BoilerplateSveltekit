export interface Props {
  text: string | null;
  type: "submit" | "button" | "reset" | "label" | "link";
  config: {
    style?: "normal" | "gradient" | "outline" | "invert";
    size?: "normal" | "big" | "small";
    text?: "normal" | "upper" | "lower" | "capital";
  };
  datas: Record<string, string | number | boolean>;
}
