
import './App.css';
import BuildGrowth from './pages/BuildGrowth';
import Card from './pages/Card';
import CaseStudies from './pages/CaseStudies';
import Community from './pages/Community';
import Footer from './pages/Footer';
import HeroSection from './pages/HeroSection';
import JoinCommunity from './pages/JoinCommunity';
import Navbar from "./pages/Navbar"
function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Card></Card>
      <Community></Community>
      <CaseStudies></CaseStudies>
      <BuildGrowth></BuildGrowth>
      <JoinCommunity></JoinCommunity>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
