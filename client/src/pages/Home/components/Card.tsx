import stars from '/stars.png'
import light from '/light.png'
import roule from '/roule.png'
export default function Card() {
  return (
    <div className='flex md:flex-row justify-center justify-center justify-items-center gap-5 container mx-auto flex-col'>
      <div className='md:w-80 md:h-56	m-0.5	 px-4 py-6 bg-primary-100/20'>
        <img className='pb-1'  src={stars} alt='stars icon' />
        <h4 className='pb-1 font-bold text-black-3'>Interactive Lessons</h4>
        <p className='text-base	text-gray-2'>Our lessons are designed to make learning an engaging experience.</p>
      </div>
      <div className='md:w-80 md:h-56	m-0.5	 px-4 py-6 bg-secondary-400/20'>
        <img className='pb-2' src={light} alt='light icon' />
        <h4 className='pb-1 font-bold text-black-3'>Personalized Learning </h4>
        <p className='text-base	text-gray-2'>Tailor your learning path to your needs and pace</p>
      </div>
      <div className='md:w-80 md:h-56	m-0.5	 lg:px-4 px-3 py-6 bg-secondary-100/20'>
        <img className='pb-1' src={roule} alt='roule' />
        <h4 className='pb-1 font-bold text-black-3'>Community Support</h4>
        <p className='text-base	text-gray-2'>
          Connect with fellow learners and native speakers for real-time
          practice.
        </p>
      </div>
    </div>
  )
}
