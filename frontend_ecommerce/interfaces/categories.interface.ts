interface ImageFormats {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface MainImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormats;
    large?: ImageFormats;
    medium?: ImageFormats;
    small?: ImageFormats;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}

interface MainImageData {
  id: number;
  attributes: MainImageAttributes;
}

interface MainImage {
  data: MainImageData;
}

interface ItemAttributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  mainimage: MainImage;
}

export interface ICategory {
  id: number;
  attributes: ItemAttributes;
}



