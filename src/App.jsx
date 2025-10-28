
import About from "./components/About"
import Book from "./components/Book"
import Brands from "./components/Brands"
import Choose from "./components/Choose"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Ourservices from "./components/Ourservices"
import Pricing from "./components/Pricing"
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
            <Choose />
            <Pricing />
            <Book />
          </main>



        </div>

    </>

  )
}

export default App