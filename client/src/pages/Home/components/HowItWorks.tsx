import { ReactComponent as Paper } from '@/assets/paper.svg'
import { ReactComponent as Arrow } from '@/assets/Arrow-dotted.svg'
import { ReactComponent as Pattern } from '@/assets/patterns/stars-pattern.svg'
import SectionTitle from './SectionTitle'
import { LuLogIn, LuLanguages } from 'react-icons/lu'


export default function HowItWorks() {
  return (
    <section className='bg-secondary-500/[3%] relative py-24'>
			<Pattern className='absolute left-0 top-0 -translate-y-1/2 lg:w-auto w-40 lg:opacity-100 opacity-50'/>
      <div className='max-w-screen-xl mx-auto'>
        <SectionTitle
          h3Text='How it works'
          h2Text='We make learning simple and straightforward!'
        />
        <div className='flex flex-col lg:flex-row  items-center text-center'>
          <div className='flex flex-col items-center py-5 lg:px-0 lg:max-w-auto max-w-[300px]'>
            <div className='w-20 h-20 rounded-2xl mb-6 shadow-md shadow-primary-100/70 flex items-center justify-center text-5xl bg-primary-100 text-white'>
              <LuLogIn />
            </div>
            <h6 className='font-semibold	text-2xl  text-gray-1 mb-4'>Sign Up</h6>
            <p className='text-base	leading-7 text-gray-3'>
              Start by creating your account. It's quick, easy, and free! All
              you need is an email address,
            </p>
          </div>
          <Arrow className='w-[400px] lg:flex hidden' />
          <div className='flex flex-col items-center py-5 lg:px-0 lg:max-w-auto max-w-[300px]'>
            <div className='w-20 h-20 rounded-2xl mb-6 shadow-md shadow-secondary-100/70 flex items-center justify-center text-5xl bg-secondary-100 text-white'>
              <LuLanguages />
            </div>
            <h6 className='font-semibold	text-2xl text-gray-1 mb-4'>
              Choose Your Language
            </h6>
            <p className='font-normal	text-base	leading-7 text-gray-3'>
              Decide what to learn. You can always change your selection in your
              account settings.
            </p>
          </div>
          <Arrow className='w-[400px] lg:flex hidden' />
          <div className='flex flex-col items-center py-5 lg:px-0 lg:max-w-auto max-w-[300px]'>
            <div className='w-20 h-20 rounded-2xl mb-6 shadow-md shadow-secondary-400/70 flex items-center justify-center text-5xl bg-secondary-400 text-white'>
              <Paper />
            </div>
            <h6 className='font-semibold	text-2xl  text-gray-1 mb-4'>
              Start Learning
            </h6>
            <p className='font-normal	text-base	leading-7 text-gray-3'>
              Now the real fun begins! You'll start with a series of interactive
              lessons designed for your skill level.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
