import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2 } from "lucide-react"
import { useState } from "react"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  imageUrl: string
}

const initialCart: CartItem[] = [
  {
    id: 1,
    quantity: 1,
    name: "Mango Smoothie with fruit chunks | 300ml",
      price: 200,
      imageUrl: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Mango-Smoothie-Recipe.jpg",
  },
  {
    id: 2,
    quantity: 1,
    name: "Chocolate Milkshake | 350ml",
    price: 150,
    imageUrl: "https://chocolatecoveredkatie.com/wp-content/uploads/2023/04/Healthy-Chocolate-Shake-jpg.webp",
  },
]

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>(initialCart)

  const updateQuantity = (id: number, newQty: number) => {
    setCart(cart =>
      cart.map(item =>
        item.id === id ? { ...item, quantity: newQty > 0 ? newQty : 1 } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCart(cart => cart.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4 max-w-3xl mx-auto">
          {cart.map(item => (
            <Card key={item.id} className="flex items-center justify-between p-4 gap-4">
              <div className="flex items-center gap-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                <div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16"
                />
                <Button variant="destructive" onClick={() => removeItem(item.id)} size="icon">
                  <Trash2 size={18} />
                </Button>
              </div>
            </Card>
          ))}

          <Card className="p-6">
            <CardContent className="flex justify-between items-center">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Proceed to Checkout</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}
