import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  const Hero = () => {
    const categories = [
      {
        title: "All",
        img: "https://5.imimg.com/data5/OB/JT/XZ/SELLER-44289338/milkshake-glass-bottle.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        title: "Coffee",
        img: "https://media.istockphoto.com/id/1163497567/vector/cold-brew-coffee-bottles.jpg?s=612x612&w=0&k=20&c=TByqPvloHwLA4rXjWqSd0iCT6RWFN1QtkzbwRwQRI_0=",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        title: "Smoothiee",
        img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390885387/OE/JH/EV/25681726/plastic-fruit-smoothie-bottles-300-ml-500x500.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ];
  
    return (
      <div className="w-full bg-blue-100 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-center flex-wrap">
          {categories.map((item, index) => (
            <Card
              key={index}
              className="w-full sm:w-[300px] h-[400px] flex flex-col justify-between shadow-lg"
            >
              <CardHeader className="flex flex-col flex-grow justify-between items-center h-full">
                <CardTitle className="text-xl text-center">{item.title}</CardTitle>
                <CardDescription className="w-full flex-grow flex items-end justify-center flex-col">
                    <p className="text-sm text-center">{item.desc}</p>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-contain h-[250px] w-full rounded-md"
                  />
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default Hero;
  