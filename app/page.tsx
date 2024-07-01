import Bullets from "./compnents/Bullets";
import Contact from "./compnents/Contact";
import ContactFields from "./compnents/ContactFields";
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
      <ContactFields />
      <Bullets />
      <Upcoming />
      <Contact />
      <Reviews />
      <Footer />
    </div>

  )
}
