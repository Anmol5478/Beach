import Hero from "./Hero"
import Navbar from "./Navbar"
import Navbar1 from "./Navbar1"
import Shakes from "./Shakes"
import Brands from "./Brands"
import Footer from "./Footer"
import Form from "./Form"


const Main =()=>{
    return (
        <div>
            <Navbar1/>
            <Navbar/>
            <Hero/>
            <Shakes/>
            <Brands/>
            <div className="flex justify-center mb-4 mt-8">

            <Form/>
            </div>
            <Footer/>

        </div>
    )
}
export default Main