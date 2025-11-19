// services/cartService.ts

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  qty: number;
}

export async function getCart(): Promise<CartItem[]> {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export async function saveCart(cart: CartItem[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
