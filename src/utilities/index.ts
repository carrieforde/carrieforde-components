export function capitalize(text: string) {
  return [text.charAt(0).toUpperCase(), text.substring(1, text.length)].join(
    ""
  );
}
