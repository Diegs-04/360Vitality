import Image from 'next/image'
function BulleEnligne({titre,content}:string) {
  return (
    <div className=" mx-auto" id="Enligne">
      
      <div className='flex md:ml-2'>
    
<a className="flex flex-col overflow-hidden md:h-48 md:w-full  md:mr-2 items-center justify-center bg-black shadow-md md:flex-row md:max-w-xl">
<div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titre}</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
</div>    
</a>

    


    </div>
    </div>
  )
}

export default BulleEnligne