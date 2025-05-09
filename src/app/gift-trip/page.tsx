"use client"

import { useRef } from "react";
import Image from "next/image";
import CardBuy from "@/components/CardBuy";
import Link from "next/link";

export default function GiftTrip() {
  const gifts = useRef(null);

  return (
    <div className="bg-transparent max-sm:flex max-sm:flex-col max-sm:h-auto">
      {/* Menu Fixo */}
      <nav className="fixed top-2 left-0 w-full text-greenAux p-4 flex  justify-end space-x-4 z-50 font-josefin">
        <Link 
          href="/"
        >
          <Image
            className="fixed left-2 top-2"
            src="/monograma.png"
            alt="Monograma"
            width={80}
            height={66}
          />
        </Link>
        <Link 
          href="/"
          className="italic max-sm:hidden"
        >
          Voltar
        </Link>
      </nav>

      <div className="h-screen flex items-center bg-white flex-col justify-center max-sm:h-auto" ref={gifts}>
        <h1 className="text-primary500 font-amelia text-6xl mt-8">Lista de presentes</h1>
        <p className="font-josefin text-xl text-neutral40 text-justify font-light">
          Ajude-nos a criar memórias inesquecíveis! Escolha um presente e faça parte dessa aventura!
        </p>
        <div className="flex flex-wrap gap-8 p-4 w-3/5">
          <CardBuy type="trip" />
        </div>

      </div>
    </div>
  );
}
