import Link from "next/link";
import { FaUserAstronaut } from "react-icons/fa";

export const Header = () => {
  return (
    <header className=" bg-neutral-900 w-full h-32 flex justify-between items-center rounded-2xl px-16">
      <h1 className="font-bold text-4xl text-center  text-white">EXAM</h1>
      <div className="flex items-center justify-start gap-4 ">
        <nav >
          <ul className="flex gap-4">
            <li>
              <Link className="text-lg text-white font-bold" href="/">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="text-lg text-white font-bold" href="/">
                Provas
              </Link>
            </li>
            <li>
              <Link className="text-lg text-white font-bold" href="/">
                Questões
              </Link>
            </li>
          </ul>
        </nav>
        <div className=" flex justify-center items-center">
          <div className="rounded-full h-24 w-24 bg-gradient-to-tl from-lime-500 to-cyan-600  animate-spin  "></div>
          <button className="w-20 h-20 bg-blue-950 rounded-full flex justify-center items-center absolute ">
            <FaUserAstronaut
              className="w-12 h-12 fill-purple-600
        
        animate-pulse        "
            />
          </button>
        </div>
      </div>
    </header>
  );
};
