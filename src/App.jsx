import Companies from "../Components/Companies/Companies";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import GetStarted from "../Components/GetStarted/GetStarted";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Resdiencies from "../Components/Resdiencies/Resdiencies";
import Value from "../Components/Value/Value";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Resdiencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}
export default App;
