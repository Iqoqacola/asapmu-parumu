import { Navigate } from "react-router-dom";

export const ProtectedRoutePenyuluhan = ({ children }) => {
  // Ambil data login dari localStorage
  const token = localStorage.getItem("authToken");

  // Kalau belum login, lempar ke halaman /masuk
  if (!token) {
    return <Navigate to="/masuk" replace />;
  }

  // Kalau sudah login, tampilkan halamannya
  return children;
};

export const ProtectedRouteIsLogin = ({ children }) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};
