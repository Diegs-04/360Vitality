import Image from 'next/image'
function BulleCoursCo({titre,content}:string) {
  return (
    <div className=" mx-auto" id="CoursCo">
      
      <div className='flex ml-10 md:ml-2'>
    
<a className="flex flex-col overflow-hidden rounded-3xl md:h-48 md:w-96 mr-10 md:mr-2 mb-10 items-center justify-center bg-black shadow-md md:flex-row md:max-w-xl">
<div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titre}</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
</div>    
</a>

    


    </div>
    </div>
  )
}

export default BulleCoursCo