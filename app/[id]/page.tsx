import Link from "next/link";

export default function Prova() {
  return (
    <div className="w-full">
      <h1 className="text-center text-white font-bold text-2xl mb-8">
        Enem 2022
      </h1>

      <ul className="flex justify-around items-center mt-16">
        <li className="w-64 h-32 rounded-md text-center shadow-lg border border-blue-500 ">
          <Link
            className=" w-full h-full flex items-center justify-center text-2xl font-bold font-sans text-blue-500"
            href={"/2022"}
          >
            Humanas
          </Link>
        </li>
        <li className="w-64 h-32 rounded-md text-center shadow-lg border border-blue-500 ">
          <Link
            className=" w-full h-full flex items-center justify-center text-2xl font-bold font-sans text-blue-500"
            href={"/2022"}
          >
            Exatas
          </Link>
        </li>
      </ul>
    </div>
  );
}
