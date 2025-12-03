import { Route, Routes, useLocation, useNavigate } from "react-router";
import {
  ProtectedRouteIsLogin,
  ProtectedRoutePenyuluhan,
} from "./components/utils/ProtectedRoute";

// Pages
import Beranda from "./pages/Beranda";
import Penyuluhan from "./pages/Penyuluhan";
import TentangKami from "./pages/TentangKami";
import ErrorPage from "./pages/Error";
import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";

// Navbar Footer
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const res = await fetch("http://localhost:8080/api/profile/me", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (res.ok) {
            const userData = await res.json();
            setUser(userData);
          } else {
            localStorage.removeItem("authToken");
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    checkUserLoggedIn();
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/masuk");
    setUser(null);
  };

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="p-10"></div>
      <Routes>
        <Route path="/" element={<Beranda />} />
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
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
