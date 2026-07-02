const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

export const IMAGES = {
  hero: unsplash("photo-1581091226825-a6a2a5aee158", 1920),
  og: unsplash("photo-1581091226825-a6a2a5aee158", 1200),
  about: unsplash("photo-1504328345606-18bbc8c9d7d1"),

  services: {
    hvac: unsplash("photo-1621905251189-08fb45d6c769"),
    cleanroom: unsplash("photo-1582719471384-894fbb16e074"),
    bms: unsplash("photo-1558346490-5670a05e6480"),
    validation: unsplash("photo-1576091160399-112ba8d25d1d"),
    testing: unsplash("photo-1532187863486-abf9db8811d6"),
    commissioning: unsplash("photo-1503387762-592deb58ef4e"),
    maintenance: unsplash("photo-1581092160562-40aa08f788ca"),
    turnkey: unsplash("photo-1541888946425-e616a9e3f2e8"),
  },

  timeline: {
    "2016": unsplash("photo-1497366216548-37526070297c"),
    "2018": unsplash("photo-1584308666744-24d5c474f2ae"),
    "2020": unsplash("photo-1518770660439-4636190af475"),
    "2022": unsplash("photo-1521737604893-d14cc237f11d"),
    "2024": unsplash("photo-1485827404703-89b55fcc595e"),
    "2026": unsplash("photo-1560179707-f14e90ef3623"),
  },

  gallery: [
    {
      src: unsplash("photo-1582719201952-260a58f1b9b0", 1600),
      alt: "Pharmaceutical cleanroom facility",
      className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    },
    {
      src: unsplash("photo-1581092918056-0c4c3acd3789"),
      alt: "Engineer inspecting HVAC systems",
      className: "col-span-1 row-span-1",
    },
    {
      src: unsplash("photo-1532094349884-543bc11b234d"),
      alt: "Laboratory research environment",
      className: "col-span-1 row-span-1",
    },
    {
      src: unsplash("photo-1565793298595-6a879b1d9492", 1600),
      alt: "Industrial manufacturing plant",
      className: "col-span-2 row-span-1",
    },
    {
      src: unsplash("photo-1581091226825-a6a2a5aee158"),
      alt: "Engineering team at work",
      className: "col-span-1 row-span-2",
    },
    {
      src: unsplash("photo-1519494026892-80bbd2d6fd0d"),
      alt: "Modern hospital infrastructure",
      className: "col-span-1 row-span-1",
    },
    {
      src: unsplash("photo-1551288049-bebda4e38f71"),
      alt: "Building management control systems",
      className: "col-span-1 row-span-1",
    },
  ],
} as const;
