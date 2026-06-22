import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { api } from "../services/api";

const Masuk = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ type: "", message: "" });

    /*
    try {
      const response = await api.post("/auth/login", formData);
      localStorage.setItem("authToken", response.data.token);
      onLogin(response.data.user);
      setAlert({ type: "success", message: "Login berhasil!" });
      navigate("/penyuluhan");
    } catch (error) {
      setAlert({ type: "error", message: "Username atau password salah!" });
    } finally {
      setLoading(false);
    }
    */

    setTimeout(() => {
      localStorage.setItem("authToken", "static-dummy-token");
      localStorage.setItem("staticUsername", formData.username);

      const userData = { namaLengkap: formData.username, username: formData.username };

      setAlert({
        type: "success",
        message: "Mengarahkan ke halaman penyuluhan...",
      });
      
      onLogin(userData);
      navigate("/penyuluhan");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--Background-color)]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[var(--Primary-color)] mb-6 uppercase">
          Masuk
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--Primary-color)]"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--Primary-color)]"
              required
            />
          </div>

          {alert.message && (
            <div
              className={`text-center text-sm p-2 rounded-md ${
                alert.type === "success"
                  ? "bg-green-100 text-[var(--Accent-color)]"
                  : "bg-red-100 text-[var(--Warning-color)]"
              }`}
            >
              {alert.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--Accent-color)] text-white font-bold py-2 rounded-lg hover:bg-[var(--Warning-color)] hover:scale-105 transition-transform disabled:bg-gray-400 cursor-pointer"
          >
            {loading ? "Masuk..." : "Masuk"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Belum punya akun?{" "}
          <Link
            to="/daftar"
            className="text-[var(--Primary-color)] font-semibold"
          >
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Masuk;