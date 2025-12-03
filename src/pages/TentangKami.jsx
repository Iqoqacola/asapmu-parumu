import { LinkButton } from "../components/ui/button";

const TentangKami = () => {
  return (
    <>
      <div
        className="w-full flex items-center justify-center"
        style={{ height: "80vh" }}
      >
        <main className="max-w-3xl text-center px-8">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-[var(--Primary-color)]">
            Edukasi Kesehatan Berbasis Website
          </h1>

          <p className="mt-4 text-lg md:text-xl" style={{ color: "#212121" }}>
            Website edukasi interaktif yang menyajikan materi kesehatan secara
            jelas, menarik, dan mudah dipahami.
          </p>

          <div className="mt-6 flex gap-6 justify-center">
            <LinkButton
              context={"Mulai Belajar"}
              funcButton={"/penyuluhan"}
            ></LinkButton>
            <LinkButton context={"Tentang Kami"} funcButton={""}></LinkButton>
          </div>
        </main>
      </div>
    </>
  );
};

export default TentangKami;
