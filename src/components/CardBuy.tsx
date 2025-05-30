"use client"

import Image from "next/image"
import giftsTrip from "../../public/data/gifts-trip"
import giftsHome from "../../public/data/gifts-home"

interface gifts {
    type: string
}

export default function CardBuy({ type }: gifts) {

    const gifts = type === "trip" ? giftsTrip : giftsHome

    const handleClick = (link: string) => {
        window.open(link, "_blank");
      };

    return (
        <>
            {gifts.map(item => (
                <div className="" key={item.id}>
                    <div className="relative w-full h-32 flex items-center justify-center group" >
                        <Image
                            width={250}
                            height={155}
                            src={item.image}
                            alt="Curva"
                            className="absolute inset-0 w-full h-32 object-cover transition-opacity duration-300 group-hover:opacity-30 rounded-lg" />

                        <p className="absolute text-neutral50 opacity-0 text-2xl font-light transition-colors duration-300 text-center group-hover:opacity-100">
                            {item.description}
                        </p>
                    </div>
                    <button
                        onClick={() => handleClick(item.link)}
                        className="w-[250px] h-[60px] bg-primary600 text-neutral50 rounded-md mt-1 text-3xl font-light">
                        {item.price}
                    </button>
                </div>
            ))}
        </>
    )
}