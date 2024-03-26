"use client";
import Image from "next/image";
import { useState } from "react";

export default function CadastrarProva() {
  const [image, setImage] = useState("");

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(String(URL.createObjectURL(event.target.files[0])));
    }
  };
  return (
    <div className="w-full">
      <h1 className="text-center my-4 text-lime-600 font-bold">
        CADASTRAR PROVA
      </h1>
      <form className="w-full flex gap-4 bg-neutral-900 rounded-lg ">
        <div className="w-1/3  p-4">
          <div className="w-96 h-96 bg-neutral-600 relative flex items-center justify-center rounded-lg">
            {image && (
              <Image
                src={image}
                width={400}
                height={400}
                alt="photo da prova"
                className="rounded-lg absolute z-0 border-4 border-lime-700"
              />
            )}
            <label className="h-full w-full flex justify-center items-center z-10">
              <input
                type="file"
                accept="image/*"
                className="rounded-md hidden w-full h-full"
                onChange={onImageChange}
              />
             {!image && ("Selecione uma imagem")} 
            </label>
          </div>
        </div>
        <div className="w-2/3 h-96 p-4">
          <label htmlFor="nome" className="block">Nome:</label>
          <input
            type="text"
            name="Nome"
            id="nome"
            placeholder="Digite o nome da prova"
            className="w-full h-16 rounded-md mb-4"
          />
          <label htmlFor="descricao" className="block">descricao:</label>
          <textarea
            name="descricao"
            id="descricao"
            placeholder="digite a descrição da prova"
            className="w-full rounded-md h-32"
          />
        </div>
      </form>
    </div>
  );
}
