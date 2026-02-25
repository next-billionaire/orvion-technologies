import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar(){
  const [open,setOpen]=useState(false);

  const links=["Home","Services","Portfolio","Process","Testimonials","Contact"];

  return(
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur border-b z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-primary text-xl">Arventis</h1>

        <nav className="hidden md:flex gap-8">
          {links.map(l=>(
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition">{l}</a>
          ))}
        </nav>

        <button onClick={()=>setOpen(!open)} className="md:hidden">
          <FaBars/>
        </button>
      </div>

      {open && (
        <div className="md:hidden p-6 flex flex-col gap-4">
          {links.map(l=>(
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </div>
      )}
    </header>
  )
}