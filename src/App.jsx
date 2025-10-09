import { Route, Routes } from "react-router";

// Pages
import Beranda from "./pages/Beranda";
import Penyuluhan from "./pages/Penyuluhan";
import TentangKami from "./pages/TentangKami";
import ErrorPage from "./pages/Error";

// Navbar Footer
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-10"></div>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/penyuluhan" element={<Penyuluhan />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
