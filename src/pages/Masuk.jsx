import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";

const Masuk = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

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
    setAlert({ type: "", message: "" }); // Reset alert

    try {
      // [UBAH] Pakai api.post, kode jadi lebih pendek
      const { ok, data } = await api.post("/auth/login", formData);

      if (ok) {
        const token = data.token;
        localStorage.setItem("authToken", token);

        // [UBAH] Ambil profil user juga pakai api.get
        const userData = await api.get("/profile/me");

        setAlert({
          type: "success",
          message: "Mengarahkan ke halaman penyuluhan...",
        });
        onLogin(userData);
      } else {
        setAlert({
          type: "error",
          message: data.error || "Terjadi kesalahan!",
        });
      }
    } catch (err) {
      setAlert({
        type: "error",
        message: "Gagal terhubung ke server.", // Pesan error lebih user friendly
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
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

          {alert.message ? (
            <div
              className={`text-center text-sm p-2 rounded-md ${
                alert.type === "success"
                  ? "bg-green-100 text-[var(--Accent-color)]"
                  : "bg-red-100 text-[var(--Warning-color)]"
              }`}
            >
              {alert.message}
            </div>
          ) : (
            ""
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
