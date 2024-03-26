interface ProvaProps {
  id: string;
}
export default function Prova({ id }: ProvaProps) {
  return (
    <div className="w-full">
      <h1 className="text-lg text-cyan-500 font-bold text-center mt-8">
        NOME DA PROVA
      </h1>
      <section className="w-full bg-neutral-900 rounded-2xl p-8 m-8 flex gap-8">
        <div className="w-1/3">
          <div className="w-full bg-gray-300 rounded-md h-96"></div>
          <p className="text-orange-500 font-bold mt-4">DESCRIÇÂO</p>
          <hr />
          <p> Esta é uma descrição da prova</p>
        </div>
        <div className="w-2/3 h-full">
          <div className="w-full flex gap-4 justify-end items-center">
            <button className="p-4 bg-white text-black rounded-lg">
              EDITAR
            </button>
            <button className="bg-red-600 p-4 rounded-lg ">EXCLUIR</button>
            <button className="p-4 bg-purple-800 rounded-lg">GABARITO</button>
            <button className="p-4 bg-lime-800 rounded-lg">HISTÓRICO</button>
            <button className="p-4 bg-blue-800 rounded-lg">QUESTÕES</button>
            <button className="bg-orange-600 p-4 rounded-lg ">COMEÇAR</button>
          </div>
          <div className="w-full h-96 flex items-center justify-center p-8 gap-8">
            <div className=" border-8 border-purple-500 rounded-full w-60 h-60 flex flex-col justify-center items-center animate-pulse">
              <h3 className="text-purple-800 text-2xl">QUESTÕES</h3>
              <h3 className="text-purple-800 text-8xl">90</h3>
            </div>
            <div className=" border-8 border-lime-500 rounded-full w-60 h-60 flex flex-col justify-center items-center animate-pulse">
              <h3 className="text-lime-800 text-2xl">TEMPO</h3>
              <h3 className="text-lime-800 text-8xl">5H</h3>
            </div>
            <div className=" border-8 border-cyan-500 rounded-full w-60 h-60 flex flex-col justify-center items-center animate-pulse">
              <h3 className="text-cyan-800 text-2xl">NÍVEL</h3>
              <h3 className="text-cyan-800 text-6xl">MÉDIO</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
