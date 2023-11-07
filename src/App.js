import Header from '../src/components/Header';
import './App.css';
import {HeroSection} from "./components/HeroSection";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/Projects";


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {BuyerReview, SellerReview} from "./components/Reviews";
import Contact from "./components/Contact";
import {Route, Routes} from "react-router-dom";
import {WelcomePage} from "./components/WelcomePage";
import AllProjects from "./components/AllProjects";
import Experiments from "./components/Experiments";

function App() {
    return (
        <div>
            <Header/>
                <Routes>
                    <Route path={"/"} element={<WelcomePage />}></Route>
                    <Route path={"/all-projects"} element={<AllProjects />}></Route>
                    <Route path={"/experiment"} element={<Experiments />}></Route>
                </Routes>
            <Footer/>
        </div>
    );
}

export default App;
