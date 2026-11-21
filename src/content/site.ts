import type { MediaAsset } from "@/lib/media";
export const assets = {
  hero: {
    id: "hero",
    src: "/images/hero.jpg",
    alt: "Dark performance saloon travelling along an open road",
    width: 2000,
    height: 1333,
  },
  detail: {
    id: "detail",
    src: "/images/detail.jpg",
    alt: "Close view of a performance car and its carefully finished bodywork",
    width: 1600,
    height: 1067,
  },
  silver: {
    id: "silver",
    src: "/images/silver.jpg",
    alt: "Orange sports car in motion beneath roadside trees",
    width: 1600,
    height: 1067,
  },
  dark: {
    id: "dark",
    src: "/images/dark.jpg",
    alt: "Blue sports coupe with a contrasting dark bonnet",
    width: 1600,
    height: 1067,
  },
  stitch: {
    id: "stitch",
    src: "/images/reference-stitch.avif",
    alt: "Hands sewing a red accent into black automotive leather",
    width: 2880,
    height: 3600,
    position: "center 54%",
  },
  carbon: {
    id: "carbon",
    src: "/images/reference-carbon.jpg",
    alt: "Dark forged-carbon texture",
    width: 626,
    height: 628,
  },
} satisfies Record<string, MediaAsset>;
export const navigation = [
  { label: "Home", href: "/#home" },
  { label: "Our approach", href: "/#approach" },
  { label: "Services", href: "/#services" },
  { label: "Selected work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];
export const services = [
  {
    id: "wrapping",
    title: "Colour wrapping",
    subtitle: "A different point of view.",
    description:
      "From understated satin to a colour that stops you in your tracks. Explore a new finish, with every edge and contour carefully considered.",
    image: assets.hero,
  },
  {
    id: "protection",
    title: "Paint protection",
    subtitle: "Keep the first-day feeling.",
    description:
      "A clear protective layer for the journeys ahead. Precision-fitted film helps defend vulnerable surfaces while preserving the finish beneath.",
    image: assets.silver,
  },
  {
    id: "ceramic",
    title: "Ceramic coating",
    subtitle: "Depth you can see.",
    description:
      "A refined finish with a lasting, glass-like gloss. Meticulous preparation and ceramic protection make everyday care feel effortless.",
    image: assets.dark,
  },
  {
    id: "detailing",
    title: "Precision detailing",
    subtitle: "The details make the difference.",
    description:
      "A considered reset, inside and out. From paint correction to the smallest cabin detail, we bring clarity back to the surfaces you love.",
    image: assets.detail,
  },
  {
    id: "styling",
    title: "Bespoke styling",
    subtitle: "Make it unmistakably yours.",
    description:
      "A subtle accent. A contrasting roof. A complete new character. We bring individual details together into one coherent expression.",
    image: assets.hero,
  },
];
export const principles = [
  {
    number: "01",
    title: "Your vision.",
    copy: "It starts with a conversation. Your car, your taste, and the way you want it to feel. We listen before we suggest.",
    image: assets.detail,
  },
  {
    number: "02",
    title: "Our obsession.",
    copy: "The right material. The perfect alignment. The edge no one else notices. Time spent on the details is always time well spent.",
    image: assets.silver,
  },
  {
    number: "03",
    title: "One of a kind.",
    copy: "Every surface works together. A finish that feels considered from every angle, and unmistakably personal from the first glance.",
    image: assets.dark,
  },
];
export const projects = [
  {
    id: "blue",
    title: "A bolder shade",
    category: "COLOUR STUDY / EXTERIOR",
    image: assets.dark,
    description:
      "A study in confident contrast. An expressive blue palette brings out the silhouette, with dark accents keeping the finish balanced.",
  },
  {
    id: "silver",
    title: "Clarity in every curve",
    category: "PAINT PROTECTION / DETAILING",
    image: assets.silver,
    description:
      "Clean reflections and a beautifully simple finish. This concept pairs protective film with meticulous surface preparation.",
  },
  {
    id: "afterhours",
    title: "After hours",
    category: "COLOUR WRAP / STYLING",
    image: assets.hero,
    description:
      "A deeper tone, a different presence. This concept explores how colour and carefully chosen details can transform a familiar shape.",
  },
];
export type Project = (typeof projects)[number];
