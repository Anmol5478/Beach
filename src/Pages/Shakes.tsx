import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { useState } from "react"
  import { Page } from "./Pagination"
  
  const milkshakes = [
    {
      id: 1,
      name: "Mango Smoothie with fruit chunks | 300ml",
      price: 200,
      image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Mango-Smoothie-Recipe.jpg",
    },
    {
      id: 2,
      name: "Banana Oats Smoothie | 300ml",
      price: 110,
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      id: 3,
      name: "Sitaphal Smoothie | 300ml",
      price: 110,
      image: "https://assets.thehansindia.com/h-upload/2022/12/16/1325467-ca.webp",
    },
    {
      id: 4,
      name: "Chocolate Milkshake | 350ml",
      price: 150,
      image: "https://chocolatecoveredkatie.com/wp-content/uploads/2023/04/Healthy-Chocolate-Shake-jpg.webp",
    },
    {
      id: 5,
      name: "Strawberry Smoothie | 300ml",
      price: 160,
      image: "https://media.istockphoto.com/id/1362347165/photo/strawberry-smoothie-juice.jpg?s=612x612&w=0&k=20&c=BnaVbsIetsSDfs33caAu1nS-rlfzwDEzOYrleThMkc8=",
    },
    {
      id: 6,
      name: "Blueberry Protein Smoothie | 300ml",
      price: 180,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIEj5MW4DQNLYfUUy03Qtgw8Amj9Nn8E83GR0_8uVEQ&s&ec=72940544",
    },
    {
      id: 7,
      name: "Vanilla Almond Shake | 300ml",
      price: 140,
      image: "https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2015/05/Vanilla-Almond-Shakeology.960-500x500.jpg",
    },
    {
      id: 8,
      name: "Pineapple Coconut Smoothie | 300ml",
      price: 170,
      image: "https://usa.fage/sites/usa.fage/files/pineapple-mango-smoothie-collectionimg%20%281%29-min.jpg",
    },
    {
      id: 9,
      name: "Strawberry Smoothie | 300ml",
      price: 160,
      image: "https://media.istockphoto.com/id/1362347165/photo/strawberry-smoothie-juice.jpg?s=612x612&w=0&k=20&c=BnaVbsIetsSDfs33caAu1nS-rlfzwDEzOYrleThMkc8=",
    },
    {
      id: 10,
      name: "Strawberry Smoothie | 300ml",
      price: 160,
      image: "https://media.istockphoto.com/id/1362347165/photo/strawberry-smoothie-juice.jpg?s=612x612&w=0&k=20&c=BnaVbsIetsSDfs33caAu1nS-rlfzwDEzOYrleThMkc8=",
    },
  ]
  
  const MilkshakeGrid = () => {
    const [cart, setCart] = useState<Record<number, number>>({}) // { [Id]: quantity }
  
    const addToCart = (Id) => {
      setCart((prevCart) => ({
        ...prevCart,
        [Id]: (prevCart[Id] || 0) + 1,
      }))
    }
  
    const removeFromCart = (Id) => {
      setCart((prevCart) => {
        if (!prevCart[Id]) return prevCart
        const updatedQty = prevCart[Id] - 1
        if (updatedQty <= 0) {
          const { [Id]: _, ...rest } = prevCart
          return rest
        }
        return {
          ...prevCart,
          [Id]: updatedQty,
        }
      })
    }
  
    return (
      <div className="mx-auto max-w-6xl px-4 py-10" id="Categories">
        <h2 className="text-3xl font-bold text-center mb-10">Our Categories</h2>
  
        <Page />
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {milkshakes.map((item) => (
            <Card key={item.id} className="bg-blue-50 hover:shadow-lg transition rounded-xl">
              <CardHeader className="p-4 pb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain"
                />
              </CardHeader>
  
              <CardContent className="px-4 pt-2">
                <CardTitle className="text-base font-semibold">{item.name}</CardTitle>
                <p className="text-lg font-bold mt-2">₹ {item.price}</p>
              </CardContent>
  
              <CardFooter className="px-4 pb-4 flex flex-col items-center">
                {cart[item.id] ? (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-blue-200 text-white w-8 h-8 rounded-full hover:bg-red-600 transition text-lg"
                    >
                      −
                    </button>
                    <span className="text-lg font-medium">{cart[item.id]}</span>
                    <button
                      onClick={() => addToCart(item.id)}
                      className="bg-green-500 text-white w-8 h-8 rounded-full hover:bg-green-600 transition text-lg"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(item.id)}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                  >
                    Add to cart
                  </button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    )
  }
  
  export default MilkshakeGrid
  