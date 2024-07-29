import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <div className="pt-32 min-h-screen items-start justify-start flex flex-col">
      <Hero />
      <HomeAbout />
      <Services />
    </div>
  )
}

export default Home