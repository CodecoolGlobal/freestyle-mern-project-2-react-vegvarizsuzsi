import WelcomeComponent from '../Navbar';
import ImageSlider from "../ImageSlider";
import { sliderData } from "../ImageSliderDB";
import Footer from '../Footer';
import Cards from '../Cards';

const Home = () => {
    return (
        <>
         <WelcomeComponent />  
          <ImageSlider slides={sliderData} />
          <Cards />
          <Footer /> 
        </>
    )
}

export default Home;