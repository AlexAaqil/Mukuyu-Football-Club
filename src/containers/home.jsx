import Navbar from "./Navbar/"
import Hero from "./Hero/"
import About from "./About/"
import Profiles from "./PlayersProfiles"
import Gallery from "./Gallery"
import Awards from "./Awards"
import Footer from "./Footer"

export default function Home() {
    return(
        <>
            <Navbar />
            <Hero />
            <About />
            <Profiles />
            <Gallery />
            <Awards />
            <Footer />
        </>
    )
}