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
function App() {
  return (
    <div>
      <Header />
        <HeroSection />
        <Projects />
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Buyer Review">
                <BuyerReview />
            </Tab>
            <Tab eventKey="profile" title="Seller Review">
                <SellerReview />
            </Tab>

        </Tabs>


        <Contact />
        <Footer />

    </div>
  );
}

export default App;
