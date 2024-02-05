/* eslint-disable tailwindcss/enforces-shorthand */
import { DownArrow } from "../../public/downArrow";
import Image from "next/image";
import { FacebookLogo } from "../../public/facebook";
import { InstagramLogo } from "../../public/instagram";
import { WhatsappLogo } from "../../public/whatsapp";

export default function Home() {
  return (
    <main>
      {/* Home */}
      <section
        id="home"
        className="flex h-[100vh] flex-col justify-center gap-8 bg-[url(/bg.jpg)] bg-cover bg-top"
      >
        <div className="flex flex-col gap-2 text-center font-alt">
          <div className="bg-gradient-to-r from-slate-200/60 to-slate-200 to-50% bg-clip-text text-transparent">
            <h2 className="text-xl font-semibold">
              Assistencia técnica Especializada
            </h2>
            <h3 className="text-5xl font-bold ">Fernando Assistec</h3>
          </div>

          <div className="bg-gradient-to-r from-slate-200/60 to-slate-200 to-50% bg-clip-text text-3xl font-extrabold text-transparent [text-wrap:balance] md:text-4xl">
            Oferecemos um serviço{" "}
            <span className="inline-flex h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] flex-col overflow-hidden text-[#00fffc] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))]">
              <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                <li>rápido</li>
                <li>confiável</li>
                <li>profissional</li>
                <li>qualificado</li>
                <li>eficiente</li>
                <li aria-hidden="true">rápido</li>
              </ul>
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-center font-alt text-lg font-bold">
          <a
            target="_blank"
            className="rounded-l-xl bg-[#00ccc9] px-5 py-6 text-[#003c3c] outline-offset-0 transition duration-300 hover:bg-[#002424] hover:text-[#007070] hover:outline hover:outline-2 hover:outline-[#00ccc9]"
          >
            Orçamento sem compromisso
          </a>
          <a
            target="_blank"
            className="rounded-r-xl bg-[#008888] px-5 py-6 text-[#003c3c] transition duration-300 hover:bg-[#002424] hover:text-[#007070] hover:outline hover:outline-2 hover:outline-[#008888]"
          >
            Nossos produtos
          </a>
        </div>

        <div className="mt-12 flex flex-row items-center justify-center">
          <a
            href="#servicos"
            className="animate-bounce rounded-full bg-[#00ccc9] p-4 outline outline-2 outline-[#003c3c] transition-all duration-150 hover:bg-[#008888]"
          >
            <DownArrow />
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section
        id="servicos"
        className="grid h-screen w-screen grid-cols-2 bg-gradient-to-br from-slate-50 to-slate-200 to-50% px-36"
      >
        <div className="flex flex-col justify-center overflow-hidden ">
          <div>
            <h2 className="font-alt text-2xl font-bold text-[#343485]">
              Serviços
            </h2>
            <p className="text-balance font-sans text-lg font-medium text-[#0f172a]">
              Nós somos a sua solução completa quando se trata de reparos e
              manutenção de aparelhos eletrônicos! Oferecemos uma ampla
              variedade de serviços, atendendo desde celulares e tablets até
              computadores.
              <span className="font-alt font-bold text-[#343485]">
                Conheça nossos serviços!
              </span>
            </p>
            <div className="inline-flex h-full w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] [&_img]:w-16">
              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
                <li>
                  <Image
                    src={"/samsung.png"}
                    alt="Samsung"
                    width={516}
                    height={516}
                  />
                </li>
                <li>
                  <Image
                    src={"/motorola.png"}
                    alt="Motorola"
                    width={516}
                    height={516}
                  />
                </li>
                <li>
                  <Image src={"/lg.png"} alt="LG" width={516} height={516} />
                </li>
                <li>
                  <Image
                    src={"/xiaomi.png"}
                    alt="Xiaomi"
                    width={516}
                    height={516}
                  />
                </li>
                <li>
                  <Image
                    src={"/apple.png"}
                    alt="Apple"
                    width={516}
                    height={516}
                  />
                </li>
              </ul>
              <ul
                className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
                aria-hidden="true"
              >
                <li>
                  <Image
                    src={"/samsung.png"}
                    alt="Samsung"
                    width={516}
                    height={516}
                  />
                </li>
                <li>
                  <Image
                    src={"/motorola.png"}
                    alt="Motorola"
                    width={516}
                    height={516}
                  />
                </li>
                <li>
                  <Image src={"/lg.png"} alt="LG" width={516} height={516} />
                </li>
                <li>
                  <Image
                    src={"/xiaomi.png"}
                    alt="Xiaomi"
                    width={516}
                    height={516}
                  />
                </li>
                <li>
                  <Image
                    src={"/apple.png"}
                    alt="Apple"
                    width={516}
                    height={516}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={"/img1.png"} alt="" width={612} height={408} />
        </div>
      </section>

      {/* Contatos */}
      <section className="grid h-screen grid-cols-2 bg-[#0f172a] px-36">
        <div className="flex flex-col justify-center gap-8 pr-36 drop-shadow-lg">
          <div className="flex flex-col gap-2 rounded-xl bg-[#172443] p-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-4">
                <Image src={"/avaliador1.png"} alt="" width={32} height={32} />
                <p>Abelardo Palácios</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
              </div>
            </div>
            <p>
              Melhor concerto de celular, bom atendimento e o serviço é perfeito
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-xl bg-[#172443] p-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-4">
                <Image src={"/avaliador2.png"} alt="" width={32} height={32} />
                <p>Alexandre Lopes</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
              </div>
            </div>
            <p>
              Atendimento muito bom e concerto rapido é um otimo profissional,
              recomendo a todos Talvez até o melhor da cidade !!
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-xl bg-[#172443] p-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-4">
                <Image src={"/avaliador3.png"} alt="" width={32} height={32} />
                <p>Maria Clara Dela Noce</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
                <Image src={"/star.png"} alt="" width={16} height={16} />
              </div>
            </div>
            <p>
              A melhor assistência de celular que tem, super recomendo. Me
              ajudou dms e resolveu meu problema rapidinho
            </p>
          </div>
          <a
            className="rounded-xl bg-[#172443] py-4 text-center font-alt font-bold transition-all duration-150 hover:bg-[#243869]"
            target="_blank"
            href="https://www.google.com/search?q=Fernando+assistec&sca_esv=600762144&sxsrf=ACQVn0-a61_Nl0zwqIeAusuXy8vCGTtdLg%3A1706022167172&source=hp&ei=F9WvZYGCCJq_1sQPxNu3qAc&iflsig=ANes7DEAAAAAZa_jJzUQ86WgkYSvdk7rmMEfEK8xpTe7&udm=&ved=0ahUKEwjB6YDq4_ODAxWan5UCHcTtDXUQ4dUDCA0&uact=5&oq=Fernando+assistec&gs_lp=Egdnd3Mtd2l6IhFGZXJuYW5kbyBhc3Npc3RlYzIEECMYJzIEECMYJzIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I5hdQAFioF3AAeACQAQCYAcMBoAGpE6oBBDAuMTa4AQPIAQD4AQHCAgoQIxiABBiKBRgnwgILEAAYgAQYsQMYgwHCAgsQLhiABBixAxiDAcICCxAuGIAEGMcBGK8BwgIOEAAYgAQYigUYsQMYgwHCAggQABiABBixA8ICCBAuGIAEGLEDwgIOEC4YgAQYigUYsQMYgwHCAgUQLhiABMICCBAuGLEDGIAEwgIIEAAYFhgeGA8&sclient=gws-wiz#ip=1&lrd=0xa49fcb3503622f05:0x99ba714c9cce9b24,1,,,,"
          >
            Clique aqui para ver mais avaliações como essa
          </a>
        </div>
        <div className="flex h-full flex-col justify-center gap-16">
          <p className="text-pretty bg-gradient-to-r from-slate-200/60 to-slate-200 to-50% bg-clip-text font-sans text-2xl font-medium text-transparent">
            <span className="font-alt font-bold">Eaí, se interessou? </span>Não
            precisa ficar preocupado, clique em alguma opção abaixo e nos conte
            seu problema, assim poderemos resolver do jeito mais rápido e cômodo
            possível!
          </p>
          <div className="flex flex-col gap-8 text-slate-200/60 [&_a]:flex [&_a]:flex-row [&_a]:items-center [&_a]:gap-4 [&_a]:font-alt [&_a]:text-lg [&_a]:font-bold">
            <a
              href="https://www.facebook.com/profile.php?id=100095548772346"
              className="transition-all duration-150 hover:text-slate-200"
            >
              <FacebookLogo />
              <p>Facebook</p>
            </a>
            <a
              className="transition-all duration-150 hover:text-slate-200"
              href="https://api.whatsapp.com/send/?phone=5567996641633&text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento%21&type=phone_number&app_absent=0"
            >
              <WhatsappLogo />
              <p>Whatsapp</p>
            </a>
            <a
              className="transition-all duration-150 hover:text-slate-200"
              href="https://www.instagram.com/fernandoassistec/"
            >
              <InstagramLogo />
              <p>Instagram</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
