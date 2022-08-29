import Image from 'next/image'
import BulleInter from '../Components/BulleInter'
function Intervention() {
  return (
    <div className="h-screen" id="Intervention">

      <h1 className="mb-5 pt-32 text-center text-5xl md:text-6xl text-[#ffa500]"><span className="text-black"></span>INTERVENTION <span className="text-black">EN ENTREPRISE</span></h1>
      <h5 className="mb-4 mx-5 text-2xl font-bold tracking-tight md:mx-auto text-center text-gray-600 max-w-5xl">360 Vitality est persuadé que vous rejoignez notre idéologie être de vos salariés afin d'y installé une relation de confiance 
        a longue durée au sein du personnel dans votre société.</h5>
      <div className='flex flex-col '> 
        <div className='flex flex-col md:flex-row md:mx-auto'>
          <BulleInter titre={"Les salarié"} content={"Un salarié en forme est 30% + productifs."} image={"/Salarié.jpg"}/>
          <BulleInter titre={"Les douleurs"} content={"Les douleurs musculaires et articulaires sont principalement dues a une mauvaise posrture."} image={"/Douleurs.jpg"}/>
        </div>
        <div className='flex flex-col md:flex-row md:mx-auto'>
          <BulleInter titre={"Les absences"} content={"Les absences imprévu impactent sur l'organisation des entreprises."} image={"/Absence.jpg"}/>
          <BulleInter titre={"Les couts"} content={"L'absentéisme coute plusieurs millions aux entreprises."} image={"/Couts.jpg"}/>
        </div>

      </div>
      
      <div>

    <a className="block p-6 max-w-6xl mx-auto text-center bg-black shadow-md">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">La methode 360 Vitality est unique:</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">-> Analyse posturale de chaque salarié</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">-> Analyse des gestes et mouvements réalisés au seins de vos differents services</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">-> Traiter l'origine des douleurs</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">-> éviter toute pathologies futures</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">-> Conseil et exercices claires et efficaces qui changerons radicalement votre état de forme</p>

    </a>
    </div>



    </div>
  )
}

export default Intervention