import React from 'react'

const Vendor = ({vendor}) => {
    const {name,bank,account} = vendor;
  return (
    <div className='p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-full sm:w-[330px] '>
       <div className='flex flex-col items-center'>
        <div className='flex gap-1 mb-2'>
            <h3 className='font-bold'>Name: </h3>
            <h4 className='font-bold uppercase ml-2'>{name}</h4>
        </div>
        <div className='flex gap-1 mb-2'>
            <h3 className='font-bold'>Bank Name: </h3>
            <h4 className='ml-2 font-semibold bg-blue-200 pl-3 pr-3 rounded-xl first-letter:uppercase'>{bank}</h4>
        </div>
        <div className='flex gap-1 mb-2'>
            <h3 className='font-bold'>A/C number: </h3>
            <h4 className='ml-2 font-semibold bg-blue-200 pl-3 pr-3 rounded-xl'>{account}</h4>
        </div>
       </div>
        <div className='flex justify-evenly mt-3 '>
            <button className='text-green-700 bg-green-300 p-1 rounded-lg pl-3 pr-3 uppercase'>
                edit
            </button>
            <button className='text-red-700 bg-red-300 pt-0 pb-0 p-1  rounded-lg uppercase'>
                delete
            </button>
        </div>
    </div>
  )
}

export default Vendor