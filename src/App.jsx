
import About from "./components/About"
import Brands from "./components/Brands"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Ourservices from "./components/Ourservices"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <>
      
      
        <div className="wrapper">
          <Header />

          <main>
            <Hero />
            <About />
            <Brands />
            <Ourservices />
            <Testimonials />
          </main>



        </div>

    </>

  )
}

export default App