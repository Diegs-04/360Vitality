import Image from 'next/image'
function Apropos() {
  return (
    <div className="h-screen" id='Apropos'>
      <h1 className="mb-10 pt-40 text-center text-5xl md:text-6xl text-[#ffa500]"><span className="text-black">A</span> PRO<span className="text-black">POS</span></h1>
      <div className='flex '>

      
      
  <a className="hidden ml-64 mr-4 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl md:visible md:block">
  <Image 
      src="/logo.jpg"
      width={7500}
      height={7500}
    />
    
</a>
<p className='mx-5 text-black text-center md:text-left font-sm md:font-medium md:mr-64 md:text-2xl md:visible md:mx-0 '>360Vitality est une entreprise spécialisé dans le domaine de la correction posturale et prévention de blessure en entreprise mais également d'installation 
          d'infrastructure de cours collectifs liés au bien être et a la remise en forme.
        
          Notre équipe diplomée internationalement et font d'une epériance de plus de 20.000 heures de coaching individuel et en groupe a pour suel but de creér la 
          meilleure version de vous même afin d'être le plus performent non seulement professionnelement mais également dans la vie de tout les jours.
        
          "Que vous soyez en petite, moyenne ou grande entreprise, 360Vitality s'occupera de votre transformation"
        
          Notre devise au seins de notre entreprise formelle; creér un relatio saine, de confiance avec des salariés performent, fidèles et soudés l'un a l'autre.
          Poue cela notre souciance envers notre personnel est une priorité, leurs état de santé phisiques et mentales sont également les notre. Voila comment nous avons pu creér
          une entreprise ou chaque pièce de l'édifice se sent concerné et soutenu.
        
          Notre entreprisea ce jour est fier par sa méthode, de pouvoir compter sur des salariés productifs et refletant ses valeurs, qui nous permettent d'atteindre nos objectif
          en therme de chiffre d'affaire et également une constante évolution.</p>




</div>
    </div>
  )
}

export default Apropos