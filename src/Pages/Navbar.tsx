import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MapPin, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-blue-300 text-blue-600 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="text-2xl font-bold">Beach</div>

        {/* Location & Search */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1">
            <MapPin className="text-blue-600 w-5 h-5" />
            <span className="text-sm">Location</span>
          </div>

          <div className="flex items-center w-full sm:w-80">
            <input
              type="search"
              className="bg-white rounded-xl p-2 h-8 w-full"
              placeholder="Search here!"
            />
            <Search className="text-blue-600 ml-2" />
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="w-full md:w-auto">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="#Clients" className="hover:text-black">
                  Clients
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#Categories" className="hover:text-black">
                  Categories
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className="hover:text-black">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/cart" className="flex items-center gap-1 hover:text-black">
                  <ShoppingCart className="text-blue-600 w-5 h-5" />
                  <span>Cart</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
