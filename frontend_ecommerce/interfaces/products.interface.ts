interface CategoryAttributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface CategoryData {
  id: number;
  attributes: CategoryAttributes;
}

interface ImageFormat {
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
};

interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    large: ImageFormat;
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
};

interface ImageData {
  id: number;
  attributes: ImageAttributes;
};

interface ProductAttributes {
  name: string;
  slug: string;
  quantity: number;
  description: string;
  active: boolean;
  price: number;
  origin: string;
  test: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean | null;
  image: {
    data: ImageData[];
  };

  category: {
    data: CategoryData;
  };
}

export interface IProduct {
  id: number;
  attributes: ProductAttributes;
}

