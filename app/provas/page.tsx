import Image from "next/image";
import Example from "../../public/example.jpg";
import Link from "next/link";
export default function Provas() {
  return (
    <div className="w-full relative">
      <h1 className=" text-center text-purple-600 font-bold text-lg my-8">
        PROVAS
      </h1>
      <button className="absolute top-4 right-4 bg-gradient-to-r from-lime-500 to-cyan-500 font-bold p-2 rounded-md">
        CADASTRAR
      </button>
      <section className=" grid grid-cols-3 gap-4">
        <Link
        href={'/provas'}
          className="w-full p-4 bg-neutral-900 rounded-2xl
      "
        >
          <div className="w-full flex justify-center items-center p-4">
            <Image
              src={Example.src}
              alt="foto image"
              width={350}
              height={250}
              className="rounded-lg"
            />
          </div>
          <hr/>
          <h1 className=" mt-2 font-bold">NOME DA PROVA</h1>
          <p className="text-justify">descrição da prova que por exemplo e uma prova</p>
        </Link>
        <Link
        href={'/provas'}
          className="w-full p-4 bg-neutral-900 rounded-2xl
      "
        >
          <div className="w-full flex justify-center items-center p-4">
            <Image
              src={Example.src}
              alt="foto image"
              width={350}
              height={250}
              className="rounded-lg"
            />
          </div>
          <hr/>
          <h1 className="mt-2 font-bold">NOME DA PROVA</h1>
          <p className="text-justify">descrição da prova que por exemplo e uma prova</p>
        </Link>
        <Link
        href={'/provas'}
          className="w-full p-4 bg-neutral-900 rounded-2xl
      "
        >
          <div className="w-full flex justify-center items-center p-4">
            <Image
              src={Example.src}
              alt="foto image"
              width={350}
              height={250}
              className="rounded-lg"
            />
          </div>
          <hr/>
          <h1 className="mt-2 font-bold">NOME DA PROVA</h1>
          <p className="text-justify">descrição da prova que por exemplo e uma prova</p>
        </Link>
        <Link
        href={'/provas'}
          className="w-full p-4 bg-neutral-900 rounded-2xl
      "
        >
          <div className="w-full flex justify-center items-center p-4">
            <Image
              src={Example.src}
              alt="foto image"
              width={350}
              height={250}
              className="rounded-lg"
            />
          </div>
          <hr/>
          <h1 className="mt-2 font-bold">NOME DA PROVA</h1>
          <p className="text-justify">descrição da prova que por exemplo e uma prova</p>
        </Link>
      </section>
    </div>
  );
}
