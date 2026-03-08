import { NavBar } from "../components/NavBar";
import { HeroImage} from "../components/HeroImage";
import { Footer } from "../components/Footer";

export function HomePage(){
    return(
        <div>
            <NavBar/>
            <HeroImage/>
            <Footer/>
        </div>
    );
}