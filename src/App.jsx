
import About from "./components/About"
import Blog from "./components/Blog"
import Book from "./components/Book"
import Brands from "./components/Brands"
import Choose from "./components/Choose"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Ourservices from "./components/Ourservices"
import Pricing from "./components/Pricing"
import Subscribe from "./components/Subscribe"
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
            <Blog />
            <Subscribe />
          </main>


          <Footer />
        </div>

    </>

  )
}

export default App