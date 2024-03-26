import { Question } from "@/components/Question";
import Link from "next/link";

export default function Questoes() {
  return (
    <div className="w-full relative">
      <h1 className="text-center my-4 font-bold text-purple-800">QUESTÕES</h1>
      <Link
        href={"/"}
        className="absolute top-4 right-4 p-4 bg-purple-600 font-bold rounded-md"
      >
        Cadastrar
      </Link>
      <form className="w-full h-44 bg-neutral-900 mt-16 flex gap-4 items-center p-8">
        <label className="rounded-md flex items-center">
          <input className="w-64 h-12 rounded-md" placeholder="Palavra chave" />
          <button className="w-12 font-bold h-12 bg-blue-500 rounded-md">
            Filtrar
          </button>
        </label>
        <div className="w-full h-36 flex items-center justify-center">
          <select
            className="w-64 h-12 rounded-md placeholder:text-black"
            placeholder="Disciplina"
          ></select>
          <select
            className="w-64 h-12 rounded-md placeholder:text-black"
            placeholder="Disciplina"
          ></select>
          <select
            className="w-64 h-12 rounded-md placeholder:text-black"
            placeholder="Disciplina"
          ></select>
          <select
            className="w-64 h-12 rounded-md placeholder:text-black"
            placeholder="Disciplina"
          ></select>
        </div>
      </form>
      <section className="w-full  bg-neutral-900 my-8 p-8">
        <Question
          answer="Direta e Áudiolingual."
          choices={[
            "Direta e Áudiolingual.",
            "Tradicional e Gramatical.",
            "Comunicativa e Gramatical.",
            "Funcional e Lexical.",
            "Oral e Lexical.",
          ]}
          text="Giving blood is an amazing thing a person can do. Why? Because people who have anaemia, cancer, blood disorders, sickle cell, and other illnesses need blood transfusion. Some people even need regular blood transfusion to live.

        Think about it: giving blood as part ............ everyone’s life; something they done .............. a regular basis, like eating ........... a favourite restaurant. What kind of difference does that make? Well, a donation might make the difference between life and death for nearly five million people who receive blood transfusions every year.
        
        Giving blood is simple and convenient. It only takes about an hour and you can make the donation at a donor center. Afterwards, you will feel good about yourself.
        
        Most people don’t think they’ll never need a blood transfusion, but many do. Blood is something money can’t buy. One may give a newborn, a child, a mother or a father, a brother, or a sister another chance at life. In fact, this simple action may help to save lives.
        
        The blood donation process is much quicker and easier than you think. Giving blood will not decrease your strength and it’s certainly the right thing to do.
        
        A metodologia de ensino adotada pelo professor influencia o aprendizado da língua inglesa. O ensino de inglês já passou por diversas metodologias."
          title="Giving Blood = Giving Life"
        />
      </section>
    </div>
  );
}
