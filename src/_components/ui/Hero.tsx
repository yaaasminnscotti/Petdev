import { Logo } from "../WhatsappLogo";
import Image from "next/image";
import CachorroHero from "../../assets/hero-dog.webp";
import Gatinho from "../../assets/cat-hero.png";

export function Hero() {
  return (
    <header className="bg-[#e84c3d] text-white relative overflow-hidden">
      <div>
        <Image
          src={CachorroHero}
          alt="Foto do doguinho"
          fill
          sizes="100vw"
          priority
          className="object-cover relative opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pd:16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8  ">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
              Seu Pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a
              className="bg-green-500 px-5 py-2 rounded-md
                font-semibold flex items-center justify-center 
                w-fit gap-2"
              href="#"
            >
              <Logo />
              Contato via Whatsapp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <span className="bg-black text-white px-2 py-1 rounded-md">
                  5%
                </span>{" "}
                de desconto na primeira compra
              </p>

              <div className="flex mt-4 ">
                <div className="w-32 hidden lg:block">
                  <Image 
                  src={Gatinho} 
                  alt="Gato"
                  className="object-fill relative"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block h-full relative">
            <Image
              src={CachorroHero}
              alt="Foto do doguinho"
              className="object-contain"
              fill
              sizes="(max-width:768px) 0vw, 50vw"
            />
          </div>
        </article>
      </div>
    </header>
  );
}
