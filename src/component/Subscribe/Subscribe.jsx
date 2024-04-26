import React from 'react'

const Subcribe = () => {
  return (
    <div className='mt-48'>
        <div className='bg-orange-50 text-center h-72 mt-48'>
                <div className='py-14 '>
                    <h2 className='text-red text-2xl font-medium'>Subscribe to our newsletter</h2>
                    <h6 className='py-4'>Be the first to receive updates about the Quickshop community</h6>


                    <div className='relative flex justify-center'>
                        <input type="text" className='h-12 w-30 absolute rounded-md  border-1 border-red px-2' placeholder='Enter your email address' />
                        <button className='py-2 px-6 bg-red text-white font-medium rounded-md ml-80 my-1 mx-2 absolute'>Subscribe</button>
                    </div>

                </div>
                
            </div>

        
    </div>
  )
}

export default Subcribe