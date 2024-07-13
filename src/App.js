import "./style.css"

import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import Carousel from "./components/Carousel";
import Counter from "./components/Counter";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import EidCollection from "./pages/EidCollection";
import Summer24 from "./pages/Summer24";
import Womenshoes from "./pages/Womenshoes";
import WomenApperals from "./pages/WomenApperals";
import Bags from "./pages/Bags";
import Kids from "./pages/Kids";
import Accessories from "./pages/Accessories";
import Fragrances from "./pages/Fragrances";
import 'bootstrap/dist/css/bootstrap.css';
import ProductDescription from "./pages/ProductDescription";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eid-collection" element={<EidCollection />} />
        <Route path="/summer-24" element={<Summer24 />} />
        <Route path="/women-shoes" element={<Womenshoes />} />
        <Route path="/women-apperals" element={<WomenApperals />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </>
  );
}

export default App;
