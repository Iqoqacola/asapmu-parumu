import { useState } from "react";
import { Link } from "react-router-dom";

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

    setAlert({
      type: "",
      message: "",
    });

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        const token = await data.token;
        localStorage.setItem("authToken", token);

        const profileRes = await fetch("http://localhost:8080/api/profile/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (profileRes.ok) {
          const userData = await profileRes.json();

          setAlert({
            type: "success",
            message: "Mengarahkan ke halaman penyuluhan...",
          });
          onLogin(userData);
        } else {
          throw new Error("Gagal mengambil profil setelah login.");
        }
      } else {
        setAlert({
          type: "error",
          message: data.error || "Terjadi kesalahan!",
        });

        return;
      }
    } catch (err) {
      setAlert({
        type: "error",
        message: err,
      });
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
