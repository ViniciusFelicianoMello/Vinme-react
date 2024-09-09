import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Notfound from "./pages/notfound";
import Header from "./containers/header";
import Footer from "./containers/footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/aboutus" element={<About />} /> 

        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
