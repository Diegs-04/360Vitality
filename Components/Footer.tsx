import Image from 'next/image'
import BulleInter from './BulleInter'
function Footer() {
  return (
    <div className="h-screen" id="Lasauvagere">


<footer className="p-4 bg-black shadow md:px-6 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo"> */}
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap text-[#ffa500]"><span className="text-black"></span>360<span className="text-black"></span></h1><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vitality</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">360Vitality</a>
    </span>
</footer>



    </div>
  )
}

export default Footer