enum Vendor {
  MEN = 'men',
  WOMEN = 'women',
  JUNIORS = 'juniors',
}

interface Image {
  url: string;
  alt: string;
}

interface ProductOptions {
  key: string;
  values: string[];
}

interface Product {
  title: string;
  handle: string;
  description: string;
  price: number;
  vendor: Vendor;
  fit?: string;
  care: string[];
  images: Image[];
  options: ProductOptions[];
}
