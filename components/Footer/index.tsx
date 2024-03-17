import { LiaCopyrightSolid } from "react-icons/lia";

export const Footer = () => {
  return (
    <footer className="w-full mt-8 h-16 rounded-2xl bg-neutral-900 flex justify-center items-center ">
      <LiaCopyrightSolid className="fill-white"/>
       <span className="text-lg ">2024 - Lucas Carvalho De Oliveira </span>
    </footer>
  )
}