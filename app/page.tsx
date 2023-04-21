import Bullets from "./compnents/Bullets";
import Contact from "./compnents/Contact";
import Footer from "./compnents/Footer";
import Points from "./compnents/Points";
import Reviews from "./compnents/Reviews";
import Top from "./compnents/Top";
import Upcoming from "./compnents/Upcoming";


export default function Home() {
  return (
    <div>
      <Top />
      <Points />
      <Bullets />
      <Upcoming />
      <Contact />
      <Reviews />
      <Footer />
    </div>

  )
}
