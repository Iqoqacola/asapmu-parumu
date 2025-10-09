import { NavLinkButton } from "../components/ui/button";
import { LinkButton } from "../components/ui/button";
import Card from "../components/ui/Card";

const Beranda = () => {
  return (
    <>
      <div id="home">
        <div
          className="hero flex justify-center items-center gap-32"
          style={{ height: "91vh" }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-[var(--Warning-color)] drop-shadow-xl text-3xl font-bold uppercase">
              Satu Batang Rokok
            </h1>
            <h1 className="text-[var(--Warning-color)] drop-shadow-xl text-3xl font-bold uppercase">
              Bisa Mengubah Hidupmu
            </h1>
            <p className="text-lg font-semibold text-[var(--Text-grey)] my-4">
              Ribuan orang kehilangan nyawa setiap tahun akibat rokok. Mulai
              perubahanmu hari ini!
            </p>
            <div>
              <LinkButton
                context={"Saya Siap Berubah"}
                funcButton={"/penyuluhan"}
              ></LinkButton>
            </div>
          </div>
          <div className="w-2/8">
            <img src="/assets/heroParuParu.png" alt="paru-paru" />
          </div>
        </div>
        <div className="hero flex flex-col gap-18">
          <h1 className="text-[var(--Text-grey)] text-3xl font-bold uppercase">
            Ancaman Nyata di Balik Asap Rokok
          </h1>
          <div className="flex justify-around gap-12">
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
        <div className="hero p-16 mt-12 flex flex-col gap-4">
          <h1 className="text-xl font-bold">
            Mulai Hidup Lebih Sehat Hari Ini
          </h1>
          <h2 className="text-lg text-[var(--Text-grey)]">
            Pahami lebih dalam tentang bahaya rokok dan cara mengatasinya.
          </h2>
          <div className="mt-4">
            <LinkButton context={"Mulai Jelajahi"} funcButton={"/penyuluhan"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
