import React from 'react'
import { createContext, useContext , useState } from 'react'

interface CartProviderProps {
  children: React.ReactNode
}

type CartContext = {
  getItemQty : (id : number) => number,
  addItemQty : (id : number) => void,
  decItemQty : (id : number) => void,
  removeItemQty : (id : number) => void
}

type CartItem = {
  id : number,
  qty : number
}

const CartContext = createContext({} as CartContext)

export function useCartContext() {
  return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {

  // const [cartItems, setCartItems] = useState<CartItem>([])

  // return <CartContext.Provider value={}>{children}</CartContext.Provider>
}