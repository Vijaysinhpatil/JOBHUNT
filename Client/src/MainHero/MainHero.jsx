import Hero from "@/Home/hero";
import CategoryCarousel from "@/Home/HomeParts/CategaryCarousel";
import Footer from "@/Home/HomeParts/Footer";
import LatestJobs from "@/Home/HomeParts/LatestJobs";

const MainHero = () => {
    return(
        <div className="min-w-screen min-h-screen bg-black">
              <Hero/>
              <CategoryCarousel/>
              <LatestJobs/>
              <Footer/>
        </div>
    )
}
export default MainHero;