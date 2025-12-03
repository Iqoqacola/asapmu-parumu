import { useEffect, useState } from "react";
import { FinishPopUp } from "../components/ui/Card";
import { api } from "../services/api";

// Komponen untuk menampilkan game dari link (menggunakan iframe)
const GameComponent = ({ gameUrl }) => {
  return (
    <div className="w-full aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-3">
      <iframe
        src={gameUrl}
        className="w-full h-full border-2 border-gray-200 rounded-lg shadow-inner"
        title="Interactive Crossword Game"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Komponen Utama
const Penyuluhan = ({ user }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      // [BARU] Cek token simpel
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("Otentikasi gagal. Silakan login kembali.");
        setIsLoading(false);
        return;
      }

      try {
        // [UBAH] Fetch data pakai api.get dengan Promise.all
        const [stepsData, progressData] = await Promise.all([
          api.get("/content/steps"),
          api.get("/progress"),
        ]);

        setSteps(stepsData);
        setCurrentStep(progressData.currentStep);
        setCompletedSteps(progressData.completedSteps);
      } catch (err) {
        setError("Gagal memuat data.");
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const saveProgressToBackend = async (progressUpdate) => {
    try {
      // [UBAH] Simpan progress pakai api.post
      await api.post("/progress", progressUpdate);
    } catch (error) {
      console.error("Gagal menyimpan progress ke server:", error);
    }
  };

  const handleCompleteStep = () => {
    if (!completedSteps.includes(currentStep)) {
      const newCompletedSteps = [...completedSteps, currentStep];
      setCompletedSteps(newCompletedSteps);
      saveProgressToBackend({ currentStep, completedSteps: newCompletedSteps });
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      saveProgressToBackend({ currentStep: newStep, completedSteps });
    }

    if (currentStep === steps.length - 1) {
      setShowPopUp(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onClosePopUp = () => {
    setShowPopUp(false);
  };

  const handlePrev = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (currentStep > 0) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      saveProgressToBackend({ currentStep: newStep, completedSteps });
    }
  };

  const progress =
    steps.length > 0
      ? ((completedSteps.length / steps.length) * 100).toFixed(0)
      : 0;

  // Fungsi untuk render media opsional di bagian bawah
  const renderInteractiveContent = (content) => {
    if (!content.interactive_type || !content.interactive_url) {
      return null;
    }

    let interactiveElement;
    switch (content.interactive_type) {
      case "VIDEO":
        interactiveElement = (
          <iframe
            src={content.interactive_url}
            title="Video Player"
            frameBorder="0"
            allow="fullscreen; autoplay; allow-top-navigation-by-user-activation"
            allowFullScreen
            className="w-full aspect-video rounded-lg shadow-md"
          ></iframe>
        );
        break;
      case "GAME":
        interactiveElement = (
          <iframe
            src={content.interactive_url}
            title="Interactive Game"
            className="w-full h-[40rem] border-0 rounded-lg shadow-md" // PERUBAHAN DI SINI
          ></iframe>
        );
        break;
      default:
        return null;
    }

    return (
      <div className="bg-gray-50 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
          {content.media_description}
        </h3>
        {interactiveElement}
      </div>
    );
  };

  const renderStepContent = () => {
    if (steps.length === 0) return null;
    const currentContent = steps[currentStep];
    if (!currentContent)
      return <p>Materi untuk langkah ini tidak ditemukan.</p>;

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div
            dangerouslySetInnerHTML={{ __html: currentContent.text_content }}
            className="prose max-w-none"
          ></div>

          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg min-h-[250px]">
            {currentContent.image_url ? (
              <img
                src={currentContent.image_url}
                alt={currentContent.title}
                className="rounded-lg shadow-md max-h-60 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x300/EFEFEF/333333?text=Gambar+Gagal";
                }}
              />
            ) : (
              <p className="text-gray-500">Gambar tidak tersedia.</p>
            )}
          </div>
        </div>

        {renderInteractiveContent(currentContent)}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Memuat data penyuluhan...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <p className="text-xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      {showPopUp ? (
        <div className="hero">
          <div>Halaman Tentang Kami</div>
          <FinishPopUp
            title={"Selamat!"}
            progress={
              <div
                className="radial-progress text-[var(--Primary-color)] text-2xl text-center self-center"
                style={{
                  "--value": 100,
                  "--size": "8rem",
                }}
                aria-valuenow={100}
                role="progressbar"
              >
                100%
              </div>
            }
            context={
              "Kamu telah menyelesaikan edukasi terkait rokok melalui website ini!"
            }
            onClose={onClosePopUp}
            contextClose={"Tutup"}
            navigate={"/"}
            contextNavigate={"Beranda"}
          />
        </div>
      ) : (
        ""
      )}
      <div className="min-h-screen bg-[var(--Background-color)] text-[var(--Text-dark)] p-4 md:p-8">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-[var(--Primary-color)] uppercase">
            Penyuluhan Bahaya Rokok
          </h1>
          <div className="font-semibold text-[var(--Accent-color)]">
            Halo, {user?.namaLengkap || "Pengguna"}
          </div>
        </header>

        <div className="w-full bg-gray-200 h-3 rounded-full mb-6">
          <div
            className="bg-[var(--Accent-color)] h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress > 100 ? 100 : progress}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1 bg-white shadow-md rounded-2xl p-4 self-start">
            <ul className="space-y-3">
              {steps.map((step, index) => (
                <li
                  key={step.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    index === currentStep
                      ? "bg-[var(--Accent-color)] text-white"
                      : completedSteps.includes(index)
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => {
                    if (completedSteps.includes(index - 1) || index === 0) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setCurrentStep(index);
                    }
                  }}
                >
                  {step.step_order}. {step.title}
                </li>
              ))}
            </ul>
          </aside>

          <main className="lg:col-span-3 bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">
                {steps[currentStep]?.title}
              </h2>
              {renderStepContent()}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-4 border-t">
              <button
                onClick={handleCompleteStep}
                disabled={completedSteps.includes(currentStep)}
                className="cursor-pointer w-full md:w-auto mb-4 md:mb-0 bg-[var(--Accent-color)] text-white px-6 py-2 rounded-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {completedSteps.includes(currentStep)
                  ? "Sudah Dipahami ✔"
                  : "Tandai Sudah Paham"}
              </button>
              <div className="flex justify-between w-full md:w-auto">
                <button
                  disabled={currentStep === 0}
                  onClick={handlePrev}
                  className="cursor-pointer bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 disabled:opacity-40 mr-2"
                >
                  Sebelumnya
                </button>
                <button
                  disabled={!completedSteps.includes(currentStep)}
                  onClick={handleNext}
                  className="cursor-pointer bg-[var(--Accent-color)] text-white px-8 py-2 rounded-lg hover:scale-105 transition-all disabled:opacity-40"
                >
                  {currentStep === steps.length - 1 ? "Selesai" : "Lanjut"}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Penyuluhan;
