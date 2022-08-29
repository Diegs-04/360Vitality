import BulleInter from '../Components/BulleEnligne'
import Image from 'next/image'
function Enligne() {
  return (
    <div className="h-screen" id="Enligne">
       <h1 className="mb-10 pt-32 text-center text-5xl md:text-6xl text-[#ffa500]"><span className="text-black"></span>CORRECTION ET <span className="text-black">RENFORCEMENT POSTURALE </span>EN LIGNE</h1>
       
       <div className='flex flex-col '> 
        <div className='flex flex-col md:flex-row md:mx-auto text-center'>
          <BulleInter titre={"+ de 95% des gens ont des problèmes posturaux"} content={"Une mauvaise posture peut affecter: ta motivation, ton énergie, ta mobilité, tes performances... 360 Vitality vous propose son programme de correction posturale en ligne Comment cela se droule t'il? "}/>
        </div>
      </div>

      <a className="flex align-items justify-center">
        <Image 
            src="/fleche.png"
            width={100}
            height={100}
          />
    
      </a>

      <div className=''>
          <ul className="w-48 text-l font-medium mx-auto md:w-full md:flex-row md:max-w-xl text-gray-900 bg-black border border-gray-200 dark:border-gray-600 dark:text-white">
            <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">1) Questionaire et fiche d'information a remplir</li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">2) Analyse posturale et morphologique via photo</li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">3) Detection des anomalies</li>
            <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">4) Programme personalisé sur 4 semaines en format vidéo</li>
            <li className="py-2 px-4 w-full rounded-b-lg">5) Perception des progrès réalisés au bout de ta programmation</li>
           
          </ul>
      </div>

      
<div className="flex p-4 mt-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 md:max-w-xl mx-auto" role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium">Info!</span> Notre programme sera bientot disponible.
  </div>
</div>








    </div>
  )
}

export default Enligne