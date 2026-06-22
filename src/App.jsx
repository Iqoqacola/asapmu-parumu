import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

// import { api } from "./services/api";
// import {
//   ProtectedRouteIsLogin,
//   ProtectedRoutePenyuluhan,
// } from "./components/utils/ProtectedRoute";
// import Masuk from "./pages/Masuk";
// import Daftar from "./pages/Daftar";
// import Penyuluhan from "./pages/Penyuluhan";

// Pages
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import ErrorPage from "./pages/Error";

import PenyuluhanStatis from "./pages/PenyuluhanStatis";

// Navbar Footer
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { useEffect, useState } from "react";

function App() {
  // const [user, setUser] = useState(null);
  
  const [user, setUser] = useState({ namaLengkap: "Pengguna", username: "pengguna" });
  
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  /*
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/profile/me");
        setUser(response.data);
      } catch (error) {
        console.error("Gagal mengambil data user", error);
      }
    };
    fetchUser();
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/masuk");
    setUser(null);
  };
  */

  return (
    <>
      {/* Navbar diberikan fungsi logout kosong karena statis */}
      <Navbar user={user} onLogout={() => {}} />
      <div className="p-10"></div>
      <Routes>
        <Route path="/" element={<Beranda />} />

        {/*
        <Route
          path="/masuk"
          element={
            <ProtectedRouteIsLogin>
              <Masuk onLogin={handleLoginSuccess} />
            </ProtectedRouteIsLogin>
          }
        />
        <Route
          path="/daftar"
          element={
            <ProtectedRouteIsLogin>
              <Daftar />
            </ProtectedRouteIsLogin>
          }
        />
        <Route
          path="/penyuluhan"
          element={
            <ProtectedRoutePenyuluhan>
              <Penyuluhan user={user} />
            </ProtectedRoutePenyuluhan>
          }
        />
        */}

        <Route path="/penyuluhan" element={<PenyuluhanStatis user={user} />} />

        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;