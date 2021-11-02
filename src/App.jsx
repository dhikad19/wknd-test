import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Description from "./components/description/Description"
import Cards from "./components/cards/Cards"
import Footer from "./components/footer/Footer"
import "./app.scss"

function App() {

  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Works />
        <Description />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
