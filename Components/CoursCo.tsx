import BulleInter from '../Components/BulleCoursCo'
function CoursCo() {
  return (
    <div className="h-screen" id="CoursCo">
       <h1 className="mb-5 pt-32 text-center text-5xl md:text-6xl text-[#ffa500]"><span className="text-black"></span>COURS <span className="text-black">COLLECTIFS</span></h1> 
       <h5 className="mb-4 mx-5 text-2xl font-bold tracking-tight md:mx-auto text-center text-gray-600 max-w-5xl">Un local a disposition? Nous mettons en place une infrastructure de cours collectifs au sein de votre entreprise.</h5>

       <div className='flex flex-col'>
         
        <div className='flex flex-col md:flex-row md:mx-auto text-center'>
          <BulleInter titre={"85% des salariés souhaiterait avoir la possibilité de faire du sport au travail."} content={""}/>
          <BulleInter titre={"Faire du sport (après) ou pendant le travail."} content={""} />
        </div>
        <div className='flex flex-col md:flex-row md:mx-auto text-center'>
          <BulleInter titre={"Augmentation de la productivité et forme."} content={""} />
          <BulleInter titre={"Augmentation de la cohésion."} content={""} />
        </div>
        <div className='flex flex-col md:flex-row md:mx-auto text-center'>
          <BulleInter titre={"Diminue le stress et Burn-out."} content={""} />
          <BulleInter titre={"Augmentation de l'attractivité et de l'image de la société"} content={""} />
        </div>

      </div>
      



    </div>
  )
}

export default CoursCo