
import About from "./components/About"
import Brands from "./components/Brands"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      
      
        <div className="wrapper">
          <Header />

          <main>
            <Hero />
            <About />
            <Brands />
          </main>



        </div>

    </>

  )
}

export default App