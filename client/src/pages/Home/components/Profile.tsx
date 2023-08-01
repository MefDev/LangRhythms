
import {GrFormNextLink, GrFormPreviousLink} from "react-icons/gr"
export default function Profile() {
  return (
    <section className='md:flex md:gap-4 container mx-auto md:flex-row md:Space between flex gap-4 flex-col space between sm:relative sm:left-10'>
      <div className='max-w-md mx-auto bg-white rounded-lg shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 lg:h-56 lg: lg:mt-4'>
        <div className='py-10 px-5 text-center space-y-2 sm:text-left'>
          <div className='flex justify-between	gap-4 space-x-0.5'>
            <div className='flex gap-2'>
              <img
                className=' block w-12 h-12 rounded-full sm:mx-0 sm:shrink-0'
                src='https://img.freepik.com/free-photo/stylish-confident-businesswoman-smiling_176420-19466.jpg'
                alt="Woman's Face"
              />
              <div>
                <p className='text-base text-black font-semibold'>
                  Erin Lindford
                </p>
                <p className='text-slate-500 font-medium'>Warsaw, Poland</p>
              </div>
            </div>
            <span className='text-end	'>4.5</span>
          </div>
          <p className='text-base text-gray-2 pt-2'>
            I'm reconnecting with my Moroccan roots through this app. It's
            incredible how quickly I'm picking up Tamazight.
          </p>
        </div>
      </div>

      <div className='lg:border border-primary-200 max-w-md mx-auto bg-white rounded-lg shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <div className='py-10 px-5 text-center space-y-2 sm:text-left'>
          <div className='flex justify-between	gap-4 space-x-0.5'>
            <div className='flex gap-2'>
              <img
                className=' block w-12 h-12 rounded-full sm:mx-0 sm:shrink-0'
                src='https://img.freepik.com/free-photo/stylish-confident-businesswoman-smiling_176420-19466.jpg'
                alt="Woman's Face"
              />
              <div>
                <p className='text-base text-black font-semibold'>
                  Erin Lindford
                </p>
                <p className='text-slate-500 font-medium'>Warsaw, Poland</p>
              </div>
            </div>
            <span className='text-end	'>4.5</span>
          </div>
          <p className='text-base text-gray-2 pt-1'>
            I'm reconnecting with my Moroccan roots through this app. It's
            incredible how quickly I'm picking up Tamazight.
          </p>
        </div>
      </div>

      <div className=' max-w-md mx-auto bg-white rounded-lg shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 lg:h-56 lg:mt-4'>
        <div className='py-10 px-5 text-center space-y-2 sm:text-left'>
          <div className='flex justify-between	gap-4 space-x-0.5'>
            <div className='flex gap-2'>
              <img
                className=' block w-12 h-12 rounded-full sm:mx-0 sm:shrink-0'
                src='https://img.freepik.com/free-photo/stylish-confident-businesswoman-smiling_176420-19466.jpg'
                alt="Woman's Face"
              />
              <div>
                <p className='text-base text-black font-semibold'>
                  Erin Lindford
                </p>
                <p className='text-slate-500 font-medium'>Warsaw, Poland</p>
              </div>
            </div>
            <span className='text-end	'>4.5</span>
          </div>
          <p className='text-base text-gray-2 pt-2'>
            I'm reconnecting with my Moroccan roots through this app. It's
            incredible how quickly I'm picking up Tamazight.
          </p>
        </div>
      </div>
<div className="flex items-end pt-1 relative top-10 right-20">
  <div className="flex text-center w-6 h-6 bg-slate-50	rounded-full mr-2">
    <GrFormPreviousLink className="relative top-1 left-1"/>
  </div>
  <div className="flex text-center w-6 h-6 bg-slate-50	rounded-full mr-2">
    <GrFormNextLink className="relative top-1 left-1" />
  </div>
</div>
    </section>
  )
}
