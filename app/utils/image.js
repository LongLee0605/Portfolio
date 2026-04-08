export function normalizeImageSrc(src = "") {
  if (typeof src !== "string") return src;
  if (!src.startsWith("../")) return src;
  return src.replace("..", "");
}
