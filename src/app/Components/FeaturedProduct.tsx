import Image from "next/image"
const FeaturedProducts = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-center  bg-green-600 py-9 mt-4 px-8 gap-14">
            <div className="md:w-6/12 w-full mb-20">
                <Image
                    src="/Product1.jpg"
                    alt="Product Three"
                    width={600}
                    height={400}
                />
                <p className="text-center py-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-4">

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md hover:bg-red-700 hover:font-bold hover:border hover:border-red-900">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="md:w-6/12 w-full ms-30">
                <Image
                    src="/Product2.jpg"
                    alt="Product Three"
                    width={600}
                    height={400}
                />
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-8 mt-14">

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md  hover:bg-red-700 hover:font-bold hover:border hover:border-red-900">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="md:w-6/12 w-full">
                <Image
                    src="/Product3.jpg"
                    alt="Product Three"
                    width={600}
                    height={400 }
                />
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-4 mt-14">

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md  hover:bg-red-700 hover:font-bold hover:border hover:border-green-900">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts;