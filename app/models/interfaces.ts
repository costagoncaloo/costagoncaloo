import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Category {
    name: string;
  }

  export interface Rating {
    rate: number;
    count: number;
  }

  export interface Produto {
    imageUrl: string | StaticImport;
    id: string;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;
  }