"use client"
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
import { firestore } from "../lib/firebase";
import { FormEvent, useState } from "react";
import Image from "next/image";

export default function Confirm() {

    const [name, setName] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [confirmed, setConfirmed] = useState<string>("");

    async function confirmGuest(event: FormEvent) {
        event.preventDefault();
        setConfirmed("");

        const guests = listGuest(phone);

        if (!name || !phone) {
            setConfirmed("Ops. É necessário digitar email e celular!");
            return;
        } else if ((await guests)?.length === 0) {
            try {
                const docRef = await addDoc(collection(firestore, "guest"), {
                    name: name,
                    phone: phone,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.error(error);
            }
            setConfirmed("Presença confirmada. Esperamos você!");
        } else {
            setConfirmed("Algo deu errado, ou voce ja está confirmado!");
            return;
        }
    }

    async function listGuest(phone: string | any) {
        if (phone) {
            const guestRef = collection(firestore, "guest");
            const q = query(guestRef, where("phone", "==", phone));
            const querySnapshot = await getDocs(q);
            const guests: any[] = [];
            querySnapshot.forEach((doc) => {
                guests.push(doc.data());
            });

            return guests;
        }
    }

    return (
        <>
            <div className="flex flex-row justify-center gap-4 w-3/5">
                <Image
                    className="w-[500px] h-[360px] rounded-lg hidden"
                    src="/gallery_1.jpg"
                    alt="Monograma"
                    width={515}
                    height={300}
                    objectFit="center" />
                <Image
                    className="w-[500px] h-[360px] rounded-lg hidden"
                    src="/gallery_2.jpg"
                    alt="Monograma"
                    width={515}
                    height={300} />
            </div>
            <div className="flex flex-row gap-4 items-center justify-center p-4 max-sm:flex-col">
                <div className="flex flex-col w-2/3 p-4 max-sm:w-full">
                    <h1 className="text-primary500 font-amelia text-6xl font-light max-sm:text-4xl">Confirme sua presença</h1>
                    <p className="font-josefin text-xl text-neutral40 text-justify font-light">
                        Confirme sua presença e celebre esse momento especial conosco!
                    </p>
                    <p className="font-josefin text-lg text-primary500 text-justify font-light">
                        Informações de Contato
                    </p>
                    <form className="flex flex-col gap-2 mt-4" onSubmit={confirmGuest}>
                        <input
                            placeholder="Seu nome"
                            type="text"
                            className="w-full h-8 mr-8 pl-3 text-neutral40 border rounded-md font-light focus:outline-none"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input
                            // mask="(99) 99999-9999"
                            placeholder="Seu celular"
                            type="text"
                            className="w-full h-8 mr-8 pl-3 text-neutral40 border rounded-md font-light focus:outline-none"
                            value={phone}
                            onChange={(event: any) => setPhone(event.target.value)}
                        />
                        <button className="w-[160px] h-[44px] bg-primary500 text-white rounded-md mt-1 text-xl font-light">
                            Enviar
                        </button>
                    </form>
                </div>
                <Image
                    className=""
                    src="/confirme_presenca.png"
                    alt="Confirme presenca"
                    width={361}
                    height={542} />
            </div>
            <div className="flex justify-arround items-center mt-10">
                {confirmed && (
                    <p
                        className="text-4xl text-neutral40 font-light flex justify-center text-justify w-full
                        max-sm:mt-2  max-sm:text-2xl max-sm:text-wedding-500"
                    >
                        {confirmed}
                    </p>
                )}
            </div>
        </>
    )
}