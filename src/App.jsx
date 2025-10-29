import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Aboutus from "./pages/Aboutus"
import Services from "./pages/Services"
import Contactus from "./pages/Contactus"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Subscribe from "./components/Subscribe"




function App() {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus /> } />
            <Route path="/services" element={<Services /> } />
            <Route path="/contactus" element={<Contactus /> } />
          </Routes>
          <Subscribe />         
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App