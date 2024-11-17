import HeroSection from "./Components/HeroSection";
import FeaturedProducts from "./Components/FeaturedProduct";
export default function Home() {
  return (
    <div>
     <div>
            <h1 className="text-blue-700 
            md:text-yellow-900
            lg:text-purple-600
            text-center
                font-extrabold text-4xl md:text-6xl lg:text-9xl ">
                Responsive Design
            </h1>
        </div>
      {/* <HeroSection /> */}
      <FeaturedProducts />
    </div>
  );
}