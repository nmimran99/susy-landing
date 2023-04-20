import Bullets from "./compnents/Bullets";
import Contact from "./compnents/Contact";
import Points from "./compnents/Points";
import Reviews from "./compnents/Reviews";
import Top from "./compnents/Top";


export default function Home() {
  return (
    <div>
      <Top />
      <Points />
      <Bullets />
      <Contact />
      <Reviews />
    </div>

  )
}
