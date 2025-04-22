const Brand = [
    {
        name: "Running",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAtyujjeJqDB7pubNcoc95BwjRBiK1gHb6JwUHbqvJg&s&ec=72940544",
    },
    {
        name: "Lifestyle",
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/49597e46926773.Y3JvcCw0OTQsMzg3LDc4LDA.jpg",
    },
    {
        name: "Trail Running",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lOiGv9dcz4luEOyeZik8J-RmLxq0J7JAmpLAffK5bQ&s&ec=72940544",
    },
    {
        name: "Football",
        image: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0017/0551/brand.gif?itok=nZO9JKIF",
    },
    {
        name: "Training",
        image: "https://m.media-amazon.com/images/S/aplus-media/vc/aff12789-178b-4e2e-8cca-8aff7e2fb219.__CR0,0,350,175_PT0_SX350_V1___.png",
    },
    {
        name: "Kids",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-lFGXY9DtN8cAQhohnYE8demDKUioEsCLB3dcCHcYg&s&ec=72940544",
    },
    {
        name: "Kids",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-lFGXY9DtN8cAQhohnYE8demDKUioEsCLB3dcCHcYg&s&ec=72940544",
    },
    {
        name: "Kids",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-lFGXY9DtN8cAQhohnYE8demDKUioEsCLB3dcCHcYg&s&ec=72940544",
    },
    {
        name: "Kids",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-lFGXY9DtN8cAQhohnYE8demDKUioEsCLB3dcCHcYg&s&ec=72940544",
    },
]


const Brands = () => {
    return (
        <div className="bg-blue-100 py-10" id="Clients">
            <div id="Categories" className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Our Clients</h2>

                <div className="overflow-x-auto flex space-x-6 px-2">
                    {Brand.map((cat) => (
                        <div key={cat.name} className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden shadow-md hover:opacity-80 transition duration-300">
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Brands
