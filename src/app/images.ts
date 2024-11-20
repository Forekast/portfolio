export interface ImageModel {
  path: string;
  fullpath: string;
  name: string;
  description: string;
  alt: string;
}

export interface GalleryModel {
  name: string;
  description: string;
  images: ImageModel[];
}

export interface CollectionModel {
  name: string;
  galleries: GalleryModel[];
}

export const Collections: CollectionModel[] = [
  {
    name: "Design",
    galleries: [
      {
        name: "Template",
        description: "",
        images: [
          {
            path: "blank.png",
            name: "Template Image",
            description: "Template Description",
            alt: "Template Alt Text",
          },
        ],
      },
      {
        name: "Yelena's Manual Therapy",
        description: "",
        images: [
          {
            path: "yelenas.png",
            name: "name text",
            description: "",
            alt: "alt text 1",
          },
        ],
      },
      {
        name: "GearUp VAR",
        description: "",
        images: [
          {
            path: "gearupvar.png",
            name: "name text",
            description: "",
            alt: "alt text 1",
          },
        ],
      },
    ],
  },
  {
    name: "Games & Art",
    galleries: [
      {
        name: "co.llide",
        description: "",
        images: [
          {
            path: "collide.png",
            name: "name text",
            description: "",
            alt: "alt text 1",
          },
          {
            path: "factions.png",
            name: "name text",
            description: "",
            alt: "alt text 1",
          },
          {
            path: "mascot.png",
            name: "name text",
            description: "",
            alt: "alt text 1",
          },
        ],
      },
      {
        name: "Nyx",
        description: "",
        images: [
          {
            path: "nyx.png",
            name: "name text",
            description: "",
            alt: "alt text 1",
          },
        ],
      },
      {
        name: "Pinfall",
        description: "",
        images: [
          {
            path: "pinfall.png",
            name: "name text",
            description: "",
            alt: "alt text 1",
          },
        ],
      },
      {
        name: "TinkerTech",
        description: "",
        images: [
          {
            path: "tinkertech.png",
            name: "name text",
            description: "",
            alt: "alt text 1",
          },
        ],
      },
      {
        name: "Senior Project",
        description: "",
        images: [
          {
            path: "claire.png",
            name: "name text",
            description: "",
            alt: "alt text 1",
          },
        ],
      },
    ],
  },
  {
    name: "Web Apps",
    galleries: [
      {
        name: "Knowledge Management Tool",
        description: "",
        images: [
          {
            path: "ECA.png",
            name: "name text",
            description: "",
            alt: "alt text 1",
          },
        ],
      },
    ],
  },
].map((collection) => {
  const galleries = collection.galleries.map((gallery) => {
    const images = gallery.images.map((image) => {
      const fullpath = `/portfolio/img/${collection.name}/${image.path}`;
      return {
        ...image,
        fullpath,
      };
    });
    return {
      ...gallery,
      images,
    };
  });
  return {
    ...collection,
    galleries,
  };
});
