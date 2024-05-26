export interface AppState {
  test?: string;
  // Add other properties as needed
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discounted_price: number;
  image: string;
  quantity: number;
}
