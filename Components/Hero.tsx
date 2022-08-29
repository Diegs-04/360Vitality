import BullePourHero from "./BullePourHero"
import Image from 'next/image'

function Hero() {
  return (
     <div className="flex h-screen py-40 bg-cover bg-center bk-image bg-[url('/back1.png')] opacity-100" id="Accueil"> 

            <video autoPlay loop muted className="absolute object-cover bg-cover"> <source src="vi.MP4" type="video/mp4"/></video>

        {/* <div className="mx-auto my-auto flex flex-col text-center items-center" id="box"><h2 className="text-white text-7xl font-medium">BIENVENUE<br/>SUR 360VITALITY</h2>
        <Image className=""
            src="/WhatsApp.svg.png"
            width={100}
            height={100}
            />
         </div>
         */}
        
           
            

        


        {/* <div>
            <BullePourHero couleurBackground = {"bg-gradient-to-r from-cyan-500 to-blue-500"} />
            <div className="relative right-10"><BullePourHero couleurBackground = {"bg-gradient-to-r from-cyan-500 to-blue-500"}/></div>
            <BullePourHero couleurBackground = {"bg-gradient-to-r from-cyan-500 to-blue-500"}/>
        </div>   

        <div className="flex items-center justify-center rounded-full shadow-xs shadow-black w-44 h-44 border-solid border-2 border-sky-500 my-auto">
            <div className="flex items-center justify-center rounded-full shadow-xs shadow-black bg-black w-40 h-40 bg-[url('https://www.india.com/wp-content/uploads/2018/03/Yoga-for-women.jpg')]">

                <h1 className="text-white font-semibold">GRILLE HORAIRE</h1>
                
            </div>
        </div>
        
        <div>
            <BullePourHero couleurBackground = {"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}/>
            <div className="relative left-10"><BullePourHero couleurBackground = {"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}/></div>
            <BullePourHero couleurBackground = {"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}/>
        </div> */}


    </div>
  )
}

export default Hero