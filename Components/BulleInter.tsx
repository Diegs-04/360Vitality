import Image from 'next/image'
function BulleInter({titre,content,image}:string) {
  return (
    <div className=" mx-auto" id="Intervention">
      
      <div className='flex ml-10 md:ml-2'>

    <a className="flex flex-col overflow-hidden md:h-48 mr-10 md:mr-2 mb-10 items-center justify-center bg-black shadow-md md:flex-row md:max-w-xl ">
    <img className="object-contain w-full md:w-72 md:rounded-none md:object-cover" src={image} alt=""></img>
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titre}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
        </div>
    </a>


    </div>
    </div>
  )
}

export default BulleInter