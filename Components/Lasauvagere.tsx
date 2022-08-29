import Image from 'next/image'
import BulleInter from './BulleInter'
function Lasauvagere() {
  return (
    <div className="h-screen" id="Lasauvagere">

<h1 className="mb-10 pt-32 text-center text-5xl md:text-6xl text-[#ffa500]"><span className="text-black"></span>LA <span className="text-black">SAUVAGERE</span></h1>

<div className='flex flex-col'>

<a className='mx-auto '>
  <Image 
      src="/Horairesok.jpg"
      width={1000}
      height={500}
    />
    </a>


    <div className='my-auto mx-auto'>
          <ul className="w-48 text-l font-medium md:w-full md:flex-row md:max-w-xl bg-white border dark:text-black">
            <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">La sauvagere</li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Av. de la Chênaie, 1180 Uccle</li>
           
           
          </ul>
      </div> 


          </div>
    </div>
  )
}

export default Lasauvagere