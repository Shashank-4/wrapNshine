import Image from "next/image";
import { mediaUrl, type MediaAsset } from "@/lib/media";
export function Media({
  asset,
  priority = false,
  className = "",
  sizes = "100vw",
}: {
  asset: MediaAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      className={className}
      src={mediaUrl(asset)}
      alt={asset.alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectFit: "cover", objectPosition: asset.position ?? "center" }}
      unoptimized
    />
  );
}
