import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import Abilities from '../../components/Abilities/Abilities';
import Technologies from '../../components/Technologies/Technologies';
import Projects from '../../components/Projects/Projects';

export default function index() {
    return(
        <>
            <Header/>
            <Slider/>
            <Abilities/>
            <Technologies/>
            <Projects/>
            <Footer/>
        </>
    );
}