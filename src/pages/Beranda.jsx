import { NavLinkButton } from "../components/ui/Button";
import { LinkButton } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

const Beranda = () => {
  return (
    <>
      <div id="home" className="w-full overflow-x-hidden">
        {" "}
        {/* --- HERO SECTION --- */}
        <div
          className="hero flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-28 px-6 md:px-0 py-10 md:py-0"
          style={{ minHeight: "80vh" }}
        >
          {/* Text Section */}
          <div className="flex flex-col gap-4 text-center md:text-left max-w-lg">
            <h1 className="text-[var(--Warning-color)] drop-shadow-xl text-3xl md:text-4xl font-bold uppercase leading-tight">
              Satu Batang Rokok
            </h1>
            <h1 className="text-[var(--Warning-color)] drop-shadow-xl text-3xl md:text-4xl font-bold uppercase leading-tight">
              Bisa Mengubah Hidupmu
            </h1>
            <p className="text-base md:text-lg font-semibold text-[var(--Text-grey)] my-4">
              Ribuan orang kehilangan nyawa setiap tahun akibat rokok.{" "}
              <br className="hidden md:block" />
              Mulai perubahanmu hari ini!
            </p>
            <div className="flex justify-center md:justify-start">
              <LinkButton
                context={"Saya Siap Berubah"}
                funcButton={"/penyuluhan"}
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-2/3 md:w-1/4 flex justify-center">
            <img
              src="/assets/heroParuParu.png"
              alt="paru-paru"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        {/* --- STATS SECTION --- */}
        <div className="hero flex flex-col gap-10 md:gap-14 mt-10 md:mt-14 px-6 text-center">
          <h1 className="text-[var(--Text-grey)] text-2xl md:text-3xl font-bold uppercase">
            Ancaman Nyata di Balik Asap Rokok
          </h1>

          {/* Card Container: Stack vertikal di HP, Row di Desktop */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <Card
              title={"7 Ribu+"}
              context={"Bahan kimia dalam sebatang rokok"}
            />
            <Card title={"70 Juta"} context={"Perokok aktif di Indonesia"} />
            <Card
              title={"300 Ribu"}
              context={"Kematian per tahun akibat rokok di Indonesia"}
            />
          </div>
        </div>
        {/* --- CTA SECTION (Bottom) --- */}
        <div className="hero px-6 py-12 md:p-16 mt-8 md:mt-12 flex flex-col gap-4 text-center md:text-center items-center md:items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            Mulai Hidup Lebih Sehat Hari Ini
          </h1>
          <h2 className="text-base md:text-lg text-[var(--Text-grey)]">
            Pahami lebih dalam tentang bahaya rokok dan cara mengatasinya.
          </h2>
          <div className="mt-4 w-full md:w-auto flex justify-center md:justify-start">
            <LinkButton context={"Mulai Jelajahi"} funcButton={"/penyuluhan"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
