import Image from "next/image";
export function Header() {
  return (
    <header className="fixed z-10 flex h-[6vh] w-screen flex-row justify-between bg-[#0f172a] px-36 py-8">
      <a href="#home" className="flex flex-row items-center gap-8 ">
        <Image
          className="h-[4vh] w-fit"
          src={"/logo.png"}
          alt="logo assistec"
          width={224}
          height={224}
        />
        <p className="bg-gradient-to-r from-slate-200/60 to-slate-200 to-50% bg-clip-text font-alt text-xl font-bold text-transparent">
          Fernando Assistec
        </p>
      </a>

      <div className="flex flex-row items-center gap-4 text-center font-alt text-slate-200">
        <a
          href="#servicos"
          className="group p-2 transition duration-200 ease-linear hover:font-bold hover:text-[#00fffc]"
        >
          Serviços
          <span className="block h-0.5 max-w-0 bg-[#00fffc] transition-all duration-500 group-hover:max-w-full"></span>
        </a>
        <a className="group p-2 transition duration-200 ease-linear hover:font-bold hover:text-[#00fffc]">
          Sobre
          <span className="block h-0.5 max-w-0 bg-[#00fffc] transition-all duration-500 group-hover:max-w-full"></span>
        </a>
        <a className="group p-2 transition duration-200 ease-linear hover:font-bold hover:text-[#00fffc]">
          Marcas
          <span className="block h-0.5 max-w-0 bg-[#00fffc] transition-all duration-500 group-hover:max-w-full"></span>
        </a>
        <a className="group p-2 transition duration-200 ease-linear hover:font-bold hover:text-[#00fffc]">
          Produtos
          <span className="block h-0.5 max-w-0 bg-[#00fffc] transition-all duration-500 group-hover:max-w-full"></span>
        </a>
      </div>
    </header>
  );
}
