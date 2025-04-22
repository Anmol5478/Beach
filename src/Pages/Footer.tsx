import { Facebook, Twitter, Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-xl font-bold text-gray-800">YourBrand</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Quality you can trust. Explore a range of premium products from beverages to lifestyle.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-700">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-800">Home</a></li>
            <li><a href="#" className="hover:text-gray-800">Shop</a></li>
            <li><a href="#" className="hover:text-gray-800">About Us</a></li>
            <li><a href="#" className="hover:text-gray-800">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Policies */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-700">Policies</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-800">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-800">Return Policy</a></li>
            <li><a href="#" className="hover:text-gray-800">Shipping Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-700">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#"><Facebook className="w-5 h-5 text-gray-600 hover:text-gray-800" /></a>
            <a href="#"><Twitter className="w-5 h-5 text-gray-600 hover:text-gray-800" /></a>
            <a href="#"><Instagram className="w-5 h-5 text-gray-600 hover:text-gray-800" /></a>
          </div>
        </div>
      </div>

      {/* Separator and Bottom Bar */}
      <div className="mt-10">
        <Separator />
        <p className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
