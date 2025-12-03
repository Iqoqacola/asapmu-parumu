import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api"; // [1] Jangan lupa import ini

const Daftar = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    namaLengkap: "",
    password: "",
    konfirmasiPassword: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" });
    setLoading(true);

    try {
      // [2] Ganti fetch manual dengan api.post
      const { ok, data } = await api.post("/auth/register", {
        username: formData.username,
        namaLengkap: formData.namaLengkap,
        password: formData.password,
        konfirmasiPassword: formData.konfirmasiPassword,
      });

      if (!ok) {
        setAlert({
          type: "error",
          message: data.error || "Terjadi kesalahan!",
        });
        return;
      }

      setAlert({
        type: "success",
        message: data.success || "Registrasi berhasil! Silakan login.",
      });

      // Opsional: Reset form jika berhasil
      setFormData({
        username: "",
        namaLengkap: "",
        password: "",
        konfirmasiPassword: "",
      });
    } catch (err) {
      setAlert({
        type: "error",
        message: "Gagal terhubung ke server.",
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
          Daftar Akun
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* BAGIAN INPUT (Tidak perlu diubah, biarkan seperti semula) */}

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
            <label className="block font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="namaLengkap"
              value={formData.namaLengkap}
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

          <div>
            <label className="block font-medium mb-1">
              Konfirmasi Password
            </label>
            <input
              type="password"
              name="konfirmasiPassword"
              value={formData.konfirmasiPassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--Primary-color)]"
              required
            />
          </div>

          {/* Bagian Alert */}
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
            {loading ? "Mendaftar..." : "Daftar"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Sudah punya akun?{" "}
          <Link
            to="/masuk"
            className="text-[var(--Primary-color)] font-semibold"
          >
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Daftar;
