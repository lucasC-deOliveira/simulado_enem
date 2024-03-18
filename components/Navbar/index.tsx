"use client";
import Link from "next/link";
import { useState } from "react";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { RiDashboard2Fill } from "react-icons/ri";

export const Navbar = () => {
  const [width, setWidth] = useState<number>(100);
  const isOpen = width !== 100;
  return (
    <nav
      className="bg-neutral-900 h-80 w-full rounded-2xl flex p-4 gap-8  flex-col  justify-center items-center"
      onMouseEnter={(ev) => {
        setWidth(240);
      }}
      style={{ width, justifyItems: isOpen ? "flex-start" : "center" }}
      onMouseLeave={() => {
        setWidth(100);
      }}
    >
      <Link
        href={"/"}
        className=" flex gap-4 items-center  text-2xl font-bold"
      >
        <RiDashboard2Fill className="w-12 h-12" />
        {isOpen && <span>Dashboard</span>}
      </Link>
      <Link
        href={"/provas"}
        className="flex gap-4 items-center  text-2xl font-bold"
      >
        <FaBook className="w-12 h-12" />
        {isOpen && <span>Provas</span>}
      </Link>
      <Link
        href={"/"}
        className="flex gap-4 items-center  text-2xl font-bold"
      >
        <BsFillQuestionSquareFill className="w-12 h-12" />
        {isOpen && <span>Questões</span>}
      </Link>
      {/* <Link href={"/"}>
        <FaBook /> Provas
      </Link>
      <Link href={"/"}>
        <BsFillQuestionSquareFill />
        Questões
      </Link> */}
    </nav>
  );
};
