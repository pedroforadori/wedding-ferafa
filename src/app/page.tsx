"use client"

import { useRef, useState } from "react";
import Image from "next/image";
import Countdown from "@/components/CountDownTimer";
import { Copy } from "@phosphor-icons/react";
import Confirm from "@/components/Confirm";

export default function Home() {
  const home = useRef(null);
  const ourHistory = useRef(null);
  const gifts = useRef(null);
  const rsvp = useRef(null);
  const about = useRef(null);
  const [textCopy, setTextCopy] = useState("")

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const links = "45332032803";
  const copyQr = () => {
    navigator.clipboard.writeText(links)
      .then(() => {
        setTextCopy("Copiado")
        setTimeout(() => {
          setTextCopy(""); // ou o texto original, como "Código PIX"
        }, 5000);
      })
      .catch((err) => {
        console.error("Erro ao copiar o texto:", err);
      });
  }

  return (
    <div className="bg-transparent max-sm:flex max-sm:flex-col max-sm:h-auto">
      {/* Menu Fixo */}
      <nav className="fixed top-2 left-0 w-full text-greenAux p-4 flex  justify-end space-x-4 z-50 font-josefin">
        <button
          onClick={() => scrollToSection(home)}
        >
          <Image
            className="fixed left-2 top-2"
            src="/monograma.png"
            alt="Monograma"
            width={80}
            height={66}
          />
        </button>
        <button
          onClick={() => scrollToSection(ourHistory)}
          className="italic max-sm:hidden"
        >
          Nossa história
        </button>
        <button
          onClick={() => scrollToSection(gifts)}
          className="italic max-sm:hidden"
        >
          Lista de presentes
        </button>
        <button
          onClick={() => scrollToSection(rsvp)}
          className="italic max-sm:hidden"
        >
          Confirme sua presença
        </button>
        <button
          onClick={() => scrollToSection(about)}
          className="italic max-sm:hidden"
        >
          Sobre a festa
        </button>
      </nav>

      {/* Conteúdo das Seções */}
      <div className="flex w-full h-screen items-center justify-center bg-orange-50" ref={home}>
        <Image
          src="/bg_home.jpg"
          alt="profile"
          objectFit="cover"
          fill
          className="w-full h-full top-0 left-0 object-cover"
        />
        <p className="z-10 top-72 absolute text-7xl font-amelia max-sm:text-4xl max-xl:top-60">
          Fernanda e Rafael
        </p>
        <div className="text-white text-xl font-light z-10 absolute top-3/4 left-4">
          <Countdown />
        </div>
        <div className="absolute bottom-0 w-full bg-white h-20 rounded-t-full"></div>
      </div>
      <div className="h-screen flex flex-row bg-white max-sm:h-auto" ref={ourHistory}>
        <div className="flex flex-row gap-4 items-center justify-center mt-[-90px] max-sm:flex-col max-sm:h-auto">
          <div className="flex">
            <Image
              className=""
              src="/nossa_historia.png"
              alt="Monograma"
              width={361}
              height={542}
            />
          </div>
          <div className="flex flex-col w-2/6 shadow-2xl p-4 max-sm:w-full max-sm:bg-white">
            <h1 className="text-primary500 font-amelia text-6xl max-sm:text-4xl max-sm:text-center">Nossa História</h1>
            <p className="font-josefin text-xl text-neutral40 text-justify font-light ">
              Nosso amor teve um início silencioso, com olhares furtivos e sorrisos discretos. Nos conhecemos no primeiro ano da faculdade e, ao longo dos anos, nossos caminhos se cruzaram em momentos fugazes, sempre com conversas tímidas e breves, mas, em cada encontro, uma sensação indescritível de que algo mais estava por vir.
              O tempo passou e, no quinto ano, quando nos preparávamos para o estágio e a formatura, o destino finalmente nos uniu, dando forma ao amor que, silenciosamente, florescia dentro de nós. Naquela fase de preparação, em meio aos desafios da transição, redescobrimos a profundidade do nosso sentimento, e foi nesse reencontro gradual que percebemos o quanto o tempo separados só fortaleceu o que já havia crescido entre nós.
              Agora, com os corações plenos de amor e a certeza de que nossos caminhos estavam destinados a se entrelaçar, decidimos dar o passo mais importante de todos. Vamos nos casar, porque sabemos que cada espera, cada desafio, cada pequeno obstáculo que enfrentamos, trouxe-nos até aqui – ao nosso "para sempre".
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen flex items-center bg-white flex-col justify-center gap-8 max-sm:h-auto max-xl:top-10" ref={gifts}>
        <h1 className="text-primary500 font-amelia text-6xl mt-8">Lista de presentes</h1>
        <p className="font-josefin text-xl text-neutral40 text-justify font-light max-sm:px-3">
          Ajude-nos a criar memórias inesquecíveis! Escolha um presente e faça parte dessa aventura!
        </p>
        <div className="flex flex-wrap gap-8 p-4 w-3/5 justify-center max-sm:w-auto">
          {/* <CardBuy /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Cartão - Viagem */}
            <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
              <Image
                src="/travel-bag.png"
                alt="Presente de viagem"
                className="w-16 h-16 mx-auto mb-4"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-medium mb-2 text-primary500">Presente de Viagem</h3>
              <p className="font-josefin text-lg text-neutral40 text-justify font-light">Ajude-nos a tornar nossa lua de mel ainda mais inesquecível!</p>
              <a
                href="/gift-trip"
                target="_blank"
                className="inline-block bg-primary500 text-white py-2 px-4 rounded hover:opacity-80 transition"
              >
                Ver lista
              </a>
            </div>

            {/* Cartão - Casa */}
            <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
              <Image
                src="/house.png"
                alt="Presente para casa"
                className="w-16 h-16 mx-auto mb-4"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-medium mb-2 text-primary500">Presente para Casa</h3>
              <p className="font-josefin text-lg text-neutral40 text-justify font-light">Contribua com itens que farão parte do nosso novo lar.</p>
              <a
                href="/gift-home"
                target="_blank"
                className="inline-block bg-primary500 text-white py-2 px-4 rounded hover:opacity-80 transition"
              >
                Ver lista
              </a>
            </div>
          </div>
          {/* <div className="p-10 "> */}
          {/* Cartão - Viagem */}
          <div className="border rounded-2xl p-6 sm:px-10 shadow hover:shadow-lg transition">
            <div className="flex flex-col max-sm:flex-col sm:flex-row sm:items-center sm:gap-6">
              <div>
                <Image
                  src="/qr-code.png"
                  alt="Presente para casa"
                  className="mx-auto mb-4 sm:mx-0"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-primary500">
                  Presentei com QR Code
                </h3>
                <p className="font-josefin text-lg text-neutral40 text-justify font-light mb-4">
                  Escanei o amor, o pix vai direto para o felizes para sempre.
                </p>
                <button
                  onClick={copyQr}
                  className="bg-primary500 text-white py-2 px-4 rounded hover:opacity-80 transition flex items-center gap-2"
                >
                  {textCopy === "Copiado" ? (
                    "Copiado"
                  ) : (
                    <>
                      <Copy size={24} />
                      Código PIX
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="h-screen flex items-center justify-center bg-white flex-col max-sm:h-auto" ref={rsvp}>
        <Confirm />
      </div>
      <div className="h-screen flex items-center justify-center bg-white" ref={about}>
        <div className="flex flex-row gap-4 items-center justify-center p-4 max-sm:flex-col">
          <div className="flex flex-col items-center justify-center w-2/5 p-4 gap-4 max-sm:w-full">
            <h1 className="text-primary500 font-amelia text-6xl font-light max-sm:text-4xl">Sobre a festa</h1>
            <p className="font-josefin text-2xl text-neutral50 text-justify font-light italic">
              Quinta da cantareira
            </p>
            <p className="font-josefin text-lg text-primary500 text-justify">
              Av. Vereador Belarmino Pereira de Carvalho, 7960,
              Estr. da Roseira, 7960 – Apolinários, Mairiporã
            </p>
            <p className="font-josefin text-2xl text-neutral50 text-justify font-light italic">
              26/07/2025
            </p>
            <p className="font-josefin text-2xl text-neutral50 text-justify font-light italic">
              15h30
            </p>
            <p className="font-josefin text-lg text-primary500 text-justify">
              Traje social completo
            </p>
          </div>
          <Image
            className=""
            src="/sobre.png"
            alt="Confirme presenca"
            width={361}
            height={542}
          />
        </div>
      </div>
    </div>
  );
}
