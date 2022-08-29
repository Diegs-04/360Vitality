import Link from 'next/link'
function Header() {
  return (
    <div className="fixed w-full z-10 top-0 flex justify-between items-center bg-black bg-opacity-40">
        <h1 className="my-5 ml-28 text-5xl cursor-pointer text-[#ffa500]">360<span className="text-white">Vitality</span></h1>
        <ul className="my-5 mr-28 flex text-2xl cursor-pointer text-white">
            <Link href="#Accueil"><li className="mx-5 hover:text-[#ffa500] transition-all duration-300">Accueil</li></Link>
            <Link href="#Apropos"><li className="mx-5 hover:text-[#ffa500] transition-all duration-300">A propos</li></Link>
            <Link href="#Intervention"><li className="mx-5 hover:text-[#ffa500] transition-all duration-300">Intervention</li></Link>
            <Link href="#CoursCo"><li className="mx-5 hover:text-[#ffa500] transition-all duration-300">Cours co</li></Link>
            <Link href="#Enligne"><li className="mx-5 hover:text-[#ffa500] transition-all duration-300">En ligne</li></Link>
            <Link href="#Lasauvagere"><li className="mx-5 hover:text-[#ffa500] transition-all duration-300">La sauvagere</li></Link>
        </ul>

        

        






    </div>
  )
}

export default Header