export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  r2Key?: string;
  position?: string;
};
/** Local placeholders remain a fallback until an asset has been published to R2. */
export function mediaUrl(asset: MediaAsset): string {
  const base = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.replace(/\/$/, "");
  if (!base || !asset.r2Key) return asset.src;
  return `${base}/${asset.r2Key.split("/").map(encodeURIComponent).join("/")}`;
}
