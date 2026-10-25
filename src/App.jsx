//ไฟล์นี้จะเป็นไลฟ์หลักของโปรเจค ในการตั้งค่า Route / Re-Render Page Component ต่างๆ
//rfc
import { BrowserRouter, Route, Routes } from "react-router"
import Home from './page/Home.jsx'
import About from "./page/About.jsx"
import Contact from "./page/Contact.jsx"
import Product from "./page/Product.jsx"
import Smartphone from "./page/Smartphone.jsx"
import Tablet from "./page/Tablet.jsx"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/Product/Smartphone" element={<Smartphone/>} />
          <Route path="/Product/tablet" element={<Tablet/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
